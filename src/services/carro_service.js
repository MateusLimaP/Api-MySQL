const db = require('../db');
// responsável pela requisação do banco de dados

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query("SELECT * FROM Carros", (error, result)=>{
                if (error){ rejeitado(error); return;}
                aceito(result);
            });
        });
    },
    
    buscarUm: (id) =>{
        return new Promise((aceito, rejeitado) =>{
            db.query(`SELECT * FROM Carros WHERE id = ${id}`, (error, result) => {
                if (error){rejeitado(error); return;}
                aceito(result[0]);
            });
        });
    },

    inserir: (modelo, placa) =>{
        return new Promise((aceito, rejeitado) =>{
            db.query(`INSERT INTO Carros (modelo, placa) VALUES ('${modelo}', '${placa}')`, (error, result) =>{
                if (error){rejeitado(error); return;}
                aceito(result.id);
            });
        });
    },

    atualizar: (
        id, 
        modelo, 
        placa
        ) =>{
        return new Promise((aceito, rejeitado) => {
            
            modelo = modelo ?? null;
            placa = placa ?? null;

            let sql = `UPDATE Carros SET 
            modelo = IFNULL(?, modelo), 
            placa = IFNULL(?, placa) 
            WHERE id = ${id}`;

            


            db.query(sql, [modelo, placa], (error, result) => {
                if (error){rejeitado(error); return;}
                aceito(result);
            });

        });
    },

    deletar: async (id) => {
        return new Promise((aceito, rejeitado) => {
            let sql = `DELETE FROM Carros WHERE id = ${id}`;
            db.query(sql, (error, result) => {
                if (error){rejeitado(error); return;}
                aceito(result.affectedRows);
            });
        });
    }
};