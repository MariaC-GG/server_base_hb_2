const { DataTypes } = require('sequelize')
const db = require('../db/connection')

const Usuario = db.define('usuarios',{
    nome: {
        type: DataTypes.STRING(30),
      },
      idade: {
        type: DataTypes.INTEGER,
      },
    },{
        createdAt:false,
        updateAt:false
    })

    // Usuario.sync({force:true})

    module.exports = Usuario
  