const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LocateSchema = new Schema({
  name:{
    type: String,
    required: true,
  },

  email:{
    type: String,
    required: true,
  },

  phone:{
    type: Number,
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

  health:{
    type: String,
    required: true,
  },

  details:{
    type: String,
    required: false,
  }
});

const Locate = mongoose.model('Locate',LocateSchema);

module.exports = Locate
