const router = require('express').Router();
let Locate = require('../models/locate.model');

router.route('/').post((req,res) => {
  const {name,email,phone,address,city,state,postalcode,health,details} = req.body
  if(!name || !email || !phone || !address || !city || !state || !postalcode || !health){
    return res.status(422).json({error:"Required fields need to be filled !"});
  }
  const locate = new Locate({
    name,
    email,
    phone,
    address,
    city,
    state,
    postalcode,
    health,
    details,
  });
  locate.save()
    .then(() => res.json('Dog Located'))
    .catch(err => res.status(400).json('Error '+err));
});

module.exports = router;
