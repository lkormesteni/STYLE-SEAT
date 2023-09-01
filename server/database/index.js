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

// clients functions

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

const addClient = function(req,res) {
    const query = "INSERT INTO client (fullName, email, password, address) values (?,?,?,?)"
    const {fullName, email, password, address} = req.body

    connection.query(query, [fullName, email, password, address], (err,results) => {
        if(err){
            console.log("Error inserting data into the database:", err)
            return res.status(500).json({error :"Internal server error"})
        }
        res.json({ success: true, message: 'Client added successfully' });
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

// salons functions


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

// service functions


const getAllServices = function(req,res) {
    const query = "SELECT * FROM services"
    connection.query (query, (err,results) => {
        if(err){
            console.log("error fetching data from the database", err)
            return res.status(500).json({error: "internal server error"})
        }
        res.json(results)
    })
}

const addService = function(req,res) {
    const query = "INSERT INTO services (service, image, price) values (?,?,?)"
    const {service, image, price} = req.body

    connection.query(query, [service, image, price], (err,results) => {
        if(err){
            console.log("Error inserting data into the database:", err)
            return res.status(500).json({error :"Internal server error"})
        }
        res.json(results)
    })
}

const updateService = function (req, res) {
    const serviceId = req.params.id
    const {service, image, price} = req.body;
    const query = "UPDATE services SET service=?, image=?, price=? WHERE id=?"; 
  
    connection.query(query, [service, image, price, serviceId], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
    
    res.json(results);
});
};

const deleteService = function (req, res) {
    const serviceId = req.params.id
    const query = "DELETE FROM services WHERE id=?"; 
  
    connection.query(query, [serviceId], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
  
      res.json(results);
    });
};

// products functions


const getAllProducts = function(req,res) {
    const query = "SELECT * FROM shop"
    connection.query (query, (err,results) => {
        if(err){
            console.log("error fetching data from the database", err)
            return res.status(500).json({error: "internal server error"})
        }
        res.json(results)
    })
}

const addProduct = function(req,res) {
    const query = "INSERT INTO shop (title, description, price, image) values (?,?,?,?)"
    const {title, description, price, image} = req.body

    connection.query(query, [title, description, price, image], (err,results) => {
        if(err){
            console.log("Error inserting data into the database:", err)
            return res.status(500).json({error :"Internal server error"})
        }
        res.json(results)
    })
}

const updateProduct = function (req, res) {
    const productId = req.params.id
    const {title, description, price, image} = req.body;
    const query = "UPDATE shop SET title=?, description=?, price=?, image=? WHERE id=?"; 
  
    connection.query(query, [title, description, price, image, productId], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
    
    res.json(results);
});
};

const deleteProduct = function (req, res) {
    const productId = req.params.id
    const query = "DELETE FROM shop WHERE id=?"; 
  
    connection.query(query, [productId], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
  
      res.json(results);
    });
};

// team functions

const getAllTeam = function(req,res) {
    const query = "SELECT * FROM team"
    connection.query (query, (err,results) => {
        if(err){
            console.log("error fetching data from the database", err)
            return res.status(500).json({error: "internal server error"})
        }
        res.json(results)
    })
}

const addTeam = function(req,res) {
    const query = "INSERT INTO team (fullname, description, experience, image) values (?,?,?,?)"
    const {fullname, description, experience, image} = req.body

    connection.query(query, [fullname, description, experience, image], (err,results) => {
        if(err){
            console.log("Error inserting data into the database:", err)
            return res.status(500).json({error :"Internal server error"})
        }
        res.json(results)
    })
}

const updateTeam = function (req, res) {
    const teamId = req.params.id
    const {fullname, description, experience, image} = req.body;
    const query = "UPDATE team SET fullname=?, description=?, experience=?, image=? WHERE id=?"; 
  
    connection.query(query, [fullname, description, experience, image, teamId], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
    
    res.json(results);
});
};

const deleteTeam = function (req, res) {
    const teamId = req.params.id
    const query = "DELETE FROM team WHERE id=?"; 
  
    connection.query(query, [teamId], (err, results) => {
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
    getAllServices,
    getAllProducts,
    getAllTeam,
    addClient,
    addSalon,
    addService,
    addProduct,
    addTeam,
    updateClient,
    updateSalon,
    updateService,
    updateProduct,
    updateTeam,
    deleteClient,
    deleteSalon,
    deleteService,
    deleteProduct,
    deleteTeam
}