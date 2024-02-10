const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar-jwt");
const {
  eliminarEvento,
  crearEvento,
  getEventos,
  actualizarEvento,
} = require("../controllers/events");

const router = Router();

//Todas tienen que pasar por la validacion del JWT
//Obtener eventos
router.get("/", validarJWT, getEventos);

router.post("/", validarJWT, crearEvento);

router.put("/:id", validarJWT, actualizarEvento);

router.delete("/:id", validarJWT, eliminarEvento);

module.exports = router;
