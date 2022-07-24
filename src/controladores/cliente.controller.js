const cliente = {}
const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'bqbnbljhuhouxmxfwlq6-mysql.services.clever-cloud.com',
    user: 'ulm2un2gywrdxzyq',
    password: 'tQFP1nMNIAj4G102hSCn',
    database: 'bqbnbljhuhouxmxfwlq6'
})
/******************************************************************************************************/
cliente.getClientes = (req, res) => { 
    connection.query('select * from Clientes', function(err, result){
        if (err) throw err
        res.send(result)
})}
/*******************************************************************************************************/
cliente.getClientesID = (req, res) => { 
    const consulta = mysql.format("select * from Clientes where id = ?", [
        req.query.id
    ])
    connection.query(consulta, function(err, result){
        if (err) throw err
        res.send(result)
})}
/******************************************************************************************************/
cliente.createCliente = (req, res) => {
    const consulta = mysql.format("insert into Clientes(user,password,name,phone) values(?,?,?,?)", [
        req.body.user,
        req.body.password,
        req.body.name,
        req.body.phone,
    ])
    connection.query(consulta, function(err, result){
        if (err) throw err
        res.send(result)
})}
/******************************************************************************************************/
cliente.updateCliente = (req, res) => {
    const consulta = mysql.format("update Clientes set user = ?, password = ? ,name = ? , phone = ? where id=?", [
        req.body.user,
        req.body.password,
        req.body.name,
        req.body.phone,
        req.query.id,
    ])
    connection.query(consulta, function(err, result){
        if (err) throw err
        res.send(result)
})}
/******************************************************************************************************/
cliente.deleteCliente = (req, res) => {
    const consulta = mysql.format("delete from Clientes where id=?", [
        req.query.id,
    ])
    connection.query(consulta, function(err, result){
        if (err) throw err
        res.send(result)
})}


module.exports = cliente