const mysql = require("mysql2")
const mysqlConfig = require("./config.js")

const connection = mysql.createConnection(mysqlConfig)

connection.connect((err) => {
    if(err){
        console.log("error", err);
    }else{
        console.log("db connected");
    }
})

const getAllClients = function(req,res) {
    const query = "SELECT * FROM client"
    connection.query (query, (err,results) => {
        if(err){
            console.log("error fetching data from the database", err)
            return res.status(500).json({error: "internal server error"})
        }
        res.json(results)
    })
}

const getAllSalons = function(req,res) {
    const query = "SELECT * FROM salon"
    connection.query (query, (err,results) => {
        if(err){
            console.log("error fetching data from the database", err)
            return res.status(500).json({error: "internal server error"})
        }
        res.json(results)
    })
}
const addClient = function(req, res) {
  const query = "INSERT INTO client (fullName, email, password, address) values (?,?,?,?)";
  const { fullName, email, password, address } = req.body;

  connection.query(query, [fullName, email, password, address], (err, results) => {
    if (err) {
      console.log("Error inserting data into the database:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    res.json({ success: true, message: "User registered successfully" });
  });
};

const addSalon = function(req,res) {
    const query = "INSERT INTO salon (salonName, address, image, phoneNumber) values (?,?,?,?)"
    const {salonName, address, image, phoneNumber} = req.body

    connection.query(query, [salonName, address, image, phoneNumber], (err,results) => {
        if(err){
            console.log("Error inserting data into the database:", err)
            return res.status(500).json({error :"Internal server error"})
        }
        res.json(results)
    })
}

const updateClient = function (req, res) {
    const clientId = req.params.id
    const {fullName, email, password, address} = req.body;
    const query = "UPDATE client SET fullName=?, email=?, password=?, address=? WHERE id=?"; 
  
    connection.query(query, [fullName, email, password, address, clientId], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
  
      res.json(results);
    });
};

const updateSalon = function (req, res) {
    const salonId = req.params.id
    const {salonName, address, image, phoneNumber} = req.body;
    const query = "UPDATE salon SET salonName=?, address=?, image=?, phoneNumber=? WHERE id=?";
  
    connection.query(query, [salonName, address, image, phoneNumber, salonId], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
  
      res.json(results);
    });
};

const deleteClient = function (req, res) {
    const clientId = req.params.id
    const query = "DELETE FROM client WHERE id=?"; 
  
    connection.query(query, [clientId], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
  
      res.json(results);
    });
};

const deleteSalon = function (req, res) {
    const salonId = req.params.id
    const query = "DELETE FROM salon WHERE id=?"; 
  
    connection.query(query, [salonId], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
  
      res.json(results);
    });
};

module.exports = {
    getAllClients,
    getAllSalons,
    addClient,
    addSalon,
    updateClient,
    updateSalon,
    deleteClient,
    deleteSalon
}