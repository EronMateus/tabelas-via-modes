const Sequelize = require('sequelize')
const sequelize = new Sequelize ('Mateus','root','admin', {
    host: "localhost",
    dialect: "mysql"
})

const Usuario = sequelize.define('usuarios',{
    nome: {
        type: Sequelize.STRING
 },
    avaliação: {
        type: Sequelize.STRING
 },
    nota_final: {
        type: Sequelize.STRING
    },
})