const express = require("express");
const router = express.Router();

const carroController = require("./controllers/carro_controller");
const apiKeyController = require("./controllers/api_key_controller");

router.get("/carros", apiKeyController.verificarChaveApi, carroController.buscarTodos);
router.get("/carro/:id", apiKeyController.verificarChaveApi,  carroController.buscarUm);
router.post("/carro", apiKeyController.verificarChaveApi, carroController.inserir);
router.patch("/carro/:id", apiKeyController.verificarChaveApi, carroController.atualizar);
router.delete("/carro/:id", apiKeyController.verificarChaveApi, carroController.deletar);

module.exports = router;