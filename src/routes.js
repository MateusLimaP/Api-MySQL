const express = require("express");
const router = express.Router();

const carroController = require("./controllers/carro_controller");

router.get("/carros", carroController.buscarTodos);
router.get("/carro/:id", carroController.buscarUm);
router.post("/carro", carroController.inserir);
router.patch("/carro/:id", carroController.atualizar);
router.delete("/carro/:id", carroController.deletar);

module.exports = router;