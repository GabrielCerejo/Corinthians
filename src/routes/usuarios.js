var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/finalizar", function (req, res) {
    usuarioController.finalizar(req, res);
});

router.post("/select_quiz", function (req, res) {
    usuarioController.select_quiz(req, res);
});

router.post("/buscar_quiz", function (req, res) {
    usuarioController.buscar_quiz(req, res);
});

router.post("/buscar_ultimo", function (req, res) {
    usuarioController.buscar_ultimo(req, res);
});

router.post("/mostrar_tentativas", function (req, res) {
    usuarioController.mostrar_tentativas(req, res);
});

module.exports = router;