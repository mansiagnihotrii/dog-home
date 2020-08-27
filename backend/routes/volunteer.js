const router = require('express').Router();
let Volunteer = require('../models/volunteer.model');

router.route('/').post((req,res) => {
  const {firstname,lastname,address,city,state,postalcode,days,message} = req.body
  if (!firstname || !lastname || !address || !city || !state || !postalcode || !days){
    return res.status(422).json({error: "Required fields need to be filled !"})
  }
  const volunteer = new Volunteer({
    firstname,
    lastname,
    address,
    city,
    state,
    postalcode,
    days,
    message
  });
  volunteer.save()
    .then(() => res.json('Volunteer added'))
    .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;
