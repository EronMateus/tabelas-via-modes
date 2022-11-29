const Sequelize = require('sequelize')
const sequelize = new Sequelize ('Mateus','root','admin', {
    host: "localhost",
    dialect: "mysql"
})


sequelize.authenticate ().then(function(){
    console.log("Conectado meu brow parabens!")
}).catch(function(erro){
    console.log("Falha ao se conectar: " +erro)
})