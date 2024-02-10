const { Router } = require("express");
const { check } = require("express-validator");
const { validarJWT } = require("../middlewares/validar-jwt");
const {
  eliminarEvento,
  crearEvento,
  getEventos,
  actualizarEvento,
} = require("../controllers/events");
const { validarCampo } = require("../middlewares/validar-campos");
const { isDate } = require("../helpers/isDate");

const router = Router();

//Todas tienen que pasar por la validacion del JWT
router.use(validarJWT);
//Obtener eventos
router.get("/", getEventos);

router.post(
  "/",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio obligatoria").custom(isDate),
    check("end", "Fecha de finalizacion es obligatoria").custom(isDate),

    validarCampo,
  ],

  crearEvento
);

router.put("/:id", actualizarEvento);

router.delete("/:id", eliminarEvento);

module.exports = router;
