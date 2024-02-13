const { json } = require('express');
const mongoose = require('mongoose')

const confirmationSchema = new mongoose.Schema({
    correo:{
        type: String,
        require: true,
    },
    nombrex:{
        type: String,
        require: true,
    },
    apellido:{
      type: String,
      require: true
    },
    fecha:{
      type: Date,
      require: true
    },
    costo:{
        type: String,
        require: true
      }
  
  });

  const confirmations = mongoose.model("confirmaciones", confirmationSchema)
  
//newProd.save()
  module.exports = confirmations