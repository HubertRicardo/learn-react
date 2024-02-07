/*
  Rutas de Usuario /Auth
  host +/api/auth
*/

const express = require("express");
const router = express.Router();

const { createUser, loginUser, validateToken } = require("../controllers/auth");

router.post("/new", createUser);

router.post("/", loginUser);

router.get("/renew", validateToken);

module.exports = router;

//para crear un nuevo usuario se utiliza post
