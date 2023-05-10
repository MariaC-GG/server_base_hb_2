const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('bd_dados', 'root', 'senai',{
    host: 'localhost',
    dialect: 'mysql'
})
// teste pra ver ser conectou
// sequelize.authenticate().then(()=>{
//     console.log('Conexão realizada com sucesso ...')
// }).catch((error)=>{
//     console.error('Não foi possível realizar a conexão com o banco ...')
// }) 

module.exports = sequelize