// import modules
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config()
const winston = require('winston');
const collection = require("./mongo")
const bodyParser = require('body-parser')
const productModel = require ('./models/Products')
const confirmationsModel = require ('./models/confirmations')



const productosRoutes = require('./routes/productos');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.simple(),
    transports: [
      new winston.transports.Console()
    ]
  });


// app
const app = express();
app.use(express.json())

// db

const productSchema = new mongoose.Schema({
  name: String,
  cost: Number,
  type: String
});



// middleware
app.use(morgan("dev", { stream: { write: (message) => logger.info(message) } }));
app.use(cors({ origin: true, credentials: true }));
//app.use(bodyParser)

// routes
const testRoutes = require("./routes/test");

app.use('/productos',productosRoutes);

app.get("/", cors(), (req,res)=> {

})

app.get("/getProducts", (req,res) => {
    productModel.find()
    .then(products => res.json(products))
    .catch(err => res.json(err))
})


app.post("/", async(req,res)=>{
    const {email,password}=req.body
    try {
        const check = await collection.findOne({email:email})

        if(check){
          res.json("exist")
        }
        else{
          res.json("notexist")
        }
    } catch (error) {
        console.log(error)
    }
})

app.post('/submit-data', (req, res) => {
  // Extract data from request body
  const data = req.body;

  // Create new document with extracted data
  const newData = new confirmationsModel(data);

  // Save document to MongoDB
  newData.save()
    .then(savedData => {
      console.log('Data saved to MongoDB:', savedData);
      res.status(201).send('Data saved successfully');
    })
    .catch(err => {
      console.error('Error saving data to MongoDB:', err);
      res.status(500).send('Error saving data to MongoDB');
    });
});



// port
const port = process.env.PORT || 8080;

// listener
const server = app.listen(port, () => console.log(`server is running on port ${port}`))