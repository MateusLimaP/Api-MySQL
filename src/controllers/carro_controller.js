const carroService = require('../services/carro_service');
// Parte lógica / regras de negócio

module.exports = {
    buscarTodos: async (req, res) =>{
        let json = {
            error: "",
            result: []
        }
        
        let carros = await carroService.buscarTodos();
        if (carros.lengh == 0){
            json.error = "não há carros";
        }

        for (let i in carros){
            json.result.push({
                id: carros[i].id,
                modelo: carros[i].modelo,
                placa: carros[i].placa
            });
        }
        return res.json(json);
    },

    buscarUm: async (req, res) =>{
        let json = {
            error: "",
            result:{}
        }

        try{
            let id = req.params.id;
            let carro = await carroService.buscarUm(id);
            if (carro){
                json.result = carro;
            }else{
                json.error = "id não encontrado";
            }
            res.json(json);
        }catch(error){
            json.error = error;
            res.json(json)
        }
        

    },

    inserir: async (req, res)=>{
        let json = {
            error: "",
            result:{}
        }

        let modelo = req.body.modelo;
        let placa = req.body.placa;
        console.log(req.body);
    

        if (modelo && placa){
            let carroId = await carroService.inserir(modelo, placa);
            json.result = {
                id: carroId,
                modelo: modelo,
                placa: placa
            }
        }else{
            json.error = "campos não enviados";
        }

        res.json(json);
    },

    atualizar: async (req, res) => {
        let json = {
            error: "",
            result: {}
        };

        let modelo = req.body.modelo;
        let placa = req.body.placa;

        let id = req.params.id;



        if (modelo || placa){
            await carroService.atualizar(id, modelo, placa);
            const carro = await carroService.buscarUm(id);
            json.result = {
                id: id,
                modelo: carro.modelo,
                placa: carro.placa
            };
        
        }else{
            json.error = "nenhum campo enviado";
        }
        res.json(json);
    },

    deletar: async (req, res) => {
        let json = {
            error: "",
            result: ""
        }

        let id = req.params.id;
        const linhasAfetadas = await carroService.deletar(id);
        if (linhasAfetadas > 0){
            json.result = "Carro deletado com sucesso";
        }else{
            json.result = "Falha ao deletar carro";
        }
        res.json(json);
    
    }
};