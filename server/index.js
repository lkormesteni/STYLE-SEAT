const express = require("express")
const app = express()
const port = 5000
const db = require("./database/index.js")
const bodyparser = require("body-parser")
const cors = require("cors")

app.use(express.json())
app.use(cors())



app.get('/', (req,res) => () => {
    console.log("hello from the server");
})



app.get('/client', db.getAllClients)
app.get('/salon', db.getAllSalons)
app.get('/service', db.getAllServices)
app.get('/product', db.getAllProducts)
app.get('/team', db.getAllTeam)


app.post('/client', db.addClient)
app.post('/salon', db.addSalon)
app.post('/service', db.addService)
app.post('/product', db.addProduct)
app.post('/team', db.addTeam)

app.put('/client/:id', db.updateClient)
app.put('/salon/:id', db.updateSalon)
app.put('/service/:id', db.updateService)
app.put('/product/:id', db.updateProduct)
app.put('/team/:id', db.updateTeam)

app.delete('/client/:id', db.deleteClient)
app.delete('/salon/:id', db.deleteSalon)
app.delete('/service/:id', db.deleteService)
app.delete('/product/:id', db.deleteProduct)
app.delete('/team/:id', db.deleteTeam)




app.listen(port, () => {
    console.log(`Server listening on port : ${port}`)
})
