const apiKeyService = require("../services/api_key_service");


module.exports = {

    // Middleware para verificar a chave de API
    verificarChaveApi: async (req, res, next) => {
        const apiKey = req.headers.authorization;
        if (!apiKey){
            return res.status(401).json({
                error: 'Chave de API ausente no cabeçalho.'
            });

        }
        try{
            // Consulte o banco de dados para verificar
            // se a chave de API é válida
            const chaveValida = await apiKeyService.verificarChaveApi(apiKey);
            if (!chaveValida){
                return res.status(401).json({
                    error: "Chave de API inválida"
                });
            }

            // Chave de API válida, continue com a solicitação
            next();
        }catch(error){
            return res.status(500).json({
                error: "Erro interno do servidor"
            });
        }
    }

}