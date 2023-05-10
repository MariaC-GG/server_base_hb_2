const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const connection = require('./db/connection')
const Usuario = require('./models/Usuario')

const PORT = 3000
const hostname = 'localhost'
// ---------CONFIF express----------//
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))
// ------CONFIG express-handlebars----//
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
// ------------------------------//




// -------------------//
// connection.sync({force:true})
connection.sync().then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`Servidor rodando ${hostname}:${PORT}`)
})
}).catch((error)=>{
    console.error('Não foi possível realizar a conexão com o banco ...')
})