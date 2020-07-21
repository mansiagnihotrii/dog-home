const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const requireLogin = require('../middleware/requireLogin')



router.post('/signup',(req, res) => {
  const {name,email,password} = req.body
  if(!email || !password || !name){
    return res.status(422).json({error: "All fields are required"})
  }
  User.findOne({email:email})
  .then((savedUser)=> {
    if(savedUser){
      return res.status(422).json({error: "User already exists with that email"})
    }

    bcrypt.hash(password,12)
    .then(hashedpassword => {
        const user = new User({
          email,
          password:hashedpassword,
          name
        })

        user.save()
        .then(user => {
          res.json({message:"Saved successfully !!"})
        })
        .catch(error => {
          console.log(error)
        })
      })


    .catch(err => {
      console.log(err)
    })

  })
})

router.post('/signin',(req, res) => {
  const {email,password} = req.body
  if (!email || !password){
    return res.status(422).json({error:"All fields are required"})
  }
    User.findOne({email:email})
    .then(savedUser=>{
      if(!savedUser){
        return res.status(422).json({error:"Invalid credentials"})
      }
      bcrypt.compare(password,savedUser.password)
      .then(doMatch => {
        if (doMatch){
          const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
          return res.json({token})
        }
        return res.status(422).json({error:"Invalid credentials"})
      })
    .catch(err => {
      console.log(err)
    })
  })

})


module.exports = router
