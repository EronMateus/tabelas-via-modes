const Sequelize = require('sequelize')
const sequelize = new Sequelize ('Mateus','root','admin', {
    host: "localhost",
    dialect: "mysql"
})

const Usuario = sequelize.define('usuarios',{
    nome: {
        type: Sequelize.STRING
 },
    sobrenome:{
        type: Sequelize.STRING
},
    idade: {
        type: Sequelize.INTEGER

},
    email: {
        type: Sequelize.STRING
    }
})
//Usuario.sync({force:true})


Usuario.create({
    nome: "Eron",
    sobrenome: "Mateus",
    idade: 19,
    email: "eronmadsantos@recife.pe.senac.br",

})
Usuario.create({
    nome: "Samuel",
    sobrenome: "Henrique",
    idade: "22",
    email: "samuel@recife.pe.senac.br",
})
Usuario.create({
    nome: "Geraldo",
    sobrenome: "Pedrosa",
    idade: "32",
    email: "geraldo@recife.pe.senac.br",
})
Usuario.create({
    nome: "Thayna",
    sobrenome: "Maria",
    idade: "20",
    email: "thayna@recife.pe.senac.br",
})
Usuario.create({
    nome: "vanessa",
    sobrenome: "Maria",
    idade: 20,
    email: "thayna@recife.pe.senac.br",
})