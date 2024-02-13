const mongoose = require("mongoose")

// mongo cloud conn
mongoose.connect(process.env.MONGO_URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => console.log("DB Conected"))
.catch((err) => console.log("DB CONNECTION ERROR", err))

const newSchema = new mongoose.Schema({
  email:{
    type: String,
    require: true
  },
  password:{
    type: String,
    require: true
  }

});

// USER MANAGEMENT AREA
const collection = mongoose.model("collection", newSchema)

const {Schema} = mongoose;

const userSchema = new Schema({
    emal: String,
    password: String
});

const User = mongoose.model('User',userSchema)

const newCollection = collection({
    email:"test",
    password:"test123"
});

//newCollection.save()

// PRODUCT MANAGEMENT AREA
/*const productsSchema = new mongoose.Schema({
    name:{
      type: String,
      require: true
    },
    cost:{
      type: Number,
      require: true
    },
    type:{
        type: String,
        require: true
      }
  
  });
const products = mongoose.model("products", productsSchema)
*/

//module.exports = products
module.exports = collection