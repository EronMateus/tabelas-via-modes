const Sequelize = require('sequelize')
const sequelize = new Sequelize ('Mateus','root','admin', {
    host: "localhost",
    dialect: "mysql"
})

const postagem = sequelize.define('postagens',{
    titulo: {
        type: Sequelize.STRING
 },
    conteudo:{
        type: Sequelize.TEXT
    }
})

postagem.create({
    titulo: "Acrescentando um titulo",
    conteudo: "Acrescentando um conteudo"
})