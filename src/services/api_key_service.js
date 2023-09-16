const db = require("../db");

module.exports = {
    verificarChaveApi: async (apiKey) =>{
        return new Promise((aceito, rejeitado) => {
            const sql =  `SELECT * FROM api_keys WHERE api_key = ?`;
            db.query(sql, [apiKey], (error, result) => {
                if (error){rejeitado(error); return;}
                aceito(result.length > 0);
            });
        });
    }
}