const router = require('express').Router();
let Adopt = require('../models/adopt.model');

router.route('/').post((req,res) => {
  const {firstname,lastname,address,city,state,postalcode,message} = req.body
  if (!firstname || !lastname || !address || !city || !state || !postalcode ){
    return res.status(422).json({error: "Required fields need to be filled !"})
  }
  const adopt = new Adopt({
    firstname,
    lastname,
    address,
    city,
    state,
    postalcode,
    message
  });
  adopt.save()
    .then(() => res.json('Adoption form filled'))
    .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;
