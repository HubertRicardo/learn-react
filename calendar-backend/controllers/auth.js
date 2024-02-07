const express = require("express");

const createUser = (req, res = express.response) => {
  res.json({
    ok: true,
    msg: "register",
  });
};

const loginUser = (req, res = express.response) => {
  res.json({
    ok: true,
    msg: "login",
  });
};

const validateToken = (req, res = express.response) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};

module.exports = {
  createUser,
  loginUser,
  validateToken,
};
