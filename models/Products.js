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
    id:9,
    name:"Servicio 3",
    cost: 1200,
    type:"servicio"
});
//newProd.save()
  module.exports = products