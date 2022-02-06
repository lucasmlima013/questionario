const Sequelize = require("sequelize");
const conn = require("./database")

const Resposta = conn.define('resposta',{
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    resposta: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Pergunta.sync({force: false}).then(() => {});

module.exports = Resposta;