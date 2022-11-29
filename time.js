const Sequelize = require('sequelize')
const sequelize = new Sequelize ('Mateus','root','admin', {
    host: "localhost",
    dialect: "mysql"
})

const Time = sequelize.define('times',{
    nome: {
        type: Sequelize.STRING
 },
    serie: {
        type: Sequelize.STRING
 },
 jogos: {
    type: Sequelize.STRING
},
})
//Time.sync({force:true})

Time.create({
   nome: "Flamengo",
   serie: "serie B",
   jogos: "8 jogos ganhos",
})
Time.create({
    nome: "Sport Club do Recife",
    serie: "serie A",
    jogos: "19 jogos ganhos",
})
Time.create({
    nome: "Fluminense",
    serie: "serie C",
    jogos: "6 jogos ganhos",
})
Time.create({
    nome: "Santa Cruz",
    serie: "serie C",
    jogos: "6 jogos ganhos",
})
Time.create({
    nome: "BotaFogo",
    serie: "serie A",
    jogos: "16 jogos ganhos",
})