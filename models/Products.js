const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
    id:{
        type: Number,
        require: true,
    },
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
  
  const newProd = products({
    id:11,
    name:"Servicio 5",
    cost: 1300,
    type:"servicio"
});
//newProd.save()
  module.exports = products