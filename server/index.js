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

app.post('/client', db.addClient)
app.post('/salon', db.addSalon)

app.put('/client/:id', db.updateClient)
app.put('/salon/:id', db.updateSalon)

app.delete('/client/:id', db.deleteClient)
app.delete('/salon/:id', db.deleteSalon)




app.listen(port, () => {
    console.log(`Server listening on port : ${port}`)
})
