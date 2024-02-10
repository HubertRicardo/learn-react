const { response } = require("express");
const Eventos = require("../models/Eventos");

const getEventos = (req, res = response) => {
  res.json({
    ok: true,
    msg: "getEventos",
  });
};

const crearEvento = async (req, res = response) => {
  const evento = new Eventos(req.body);

  try {
    evento.user = req.uid;

    const eventoGuardado = await evento.save();

    res.json({
      ok: true,
      evento: eventoGuardado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const actualizarEvento = (req, res = response) => {
  res.json({
    ok: true,
    msg: "actualizar evento",
  });
};

const eliminarEvento = (req, res = response) => {
  res.json({
    ok: true,
    msg: "eliminar evento",
  });
};

module.exports = {
  eliminarEvento,
  crearEvento,
  getEventos,
  actualizarEvento,
};
