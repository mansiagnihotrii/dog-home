const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VolunteerSchema = new Schema({
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

  days:{
    type: String,
    required: true,
  },

  message:{
    type: String,
    required: false,
  }
});

const Volunteer = mongoose.model('Volunteer',VolunteerSchema);

module.exports = Volunteer
