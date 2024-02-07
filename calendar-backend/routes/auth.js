/*
  Rutas de Usuario /Auth
  host +/api/auth
*/

const express = require("express");
const { check } = require("express-validator");
const router = express.Router();

const { createUser, loginUser, validateToken } = require("../controllers/auth");

router.post(
  "/new",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe de ser de 6 caracteres").isLength({
      min: 6,
    }),
  ],
  createUser
);

router.post(
  "/",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe de ser de 6 caracteres").isLength({
      min: 6,
    }),
  ],
  loginUser
);

router.get("/renew", validateToken);

module.exports = router;

//para crear un nuevo usuario se utiliza post
