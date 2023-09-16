const mysql = require("mysql2");

// É onde conectamos o banco de dados mysql ao javascript

const DATABASE = "dbApiCarros";
const HOST = "localhost";
const USER = "root";
const PASSWORD = "Mateus920";

const connections = mysql.createConnection({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE
});

connections.connect((error) => {
    if (error) throw error;
    console.log("Conectado ao banco de dados: "+DATABASE);
});

module.exports = connections;