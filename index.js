const express = require('express')
const app = express()
const route = require('./src/rutas/clientes')
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.use('/clientes', route)

app.listen(3001, () => {
  console.log("Escuchando")
})
