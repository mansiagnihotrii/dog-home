const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AdoptSchema = new Schema({
  firstname:{
    type: String,
    required: true,
  },

  lastname:{
    type: String,
    required: true,
  },

  address:{
    type: String,
    required: true,
  },

  city:{
    type: String,
    required: true,
  },

  state:{
    type: String,
    required: true,
  },
  postalcode:{
    type: Number,
    required: true,
  },

  message:{
    type: String,
    required: false,
  }
});

const Adopt = mongoose.model('Adopt',AdoptSchema);

module.exports = Adopt
