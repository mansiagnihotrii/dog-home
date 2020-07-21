const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Post = mongoose.model("Post")
const User = mongoose.model("User")
const requireLogin = require('../middleware/requireLogin')

router.get('/allpost',(req, res) => {
  Post.find()
  .populate("author","_id name")
  .then(posts => {
    res.json({posts})
  })
  .catch(err =>{
    console.log(err)
  })
})

router.post('/createpost',requireLogin,(req, res)=>{
  const {title,body} = req.body
  if(!title || !body){
    return res.status(422).json({error:"All fields are required !"})
  }
  req.user.password = undefined
  const post = new Post({
    title,
    body,
    author:req.user
  })
  post.save()
  .then(result => {
    console.log(req.user)
    res.json({post:result})
  })
  .catch(err => {
    console.log(err)
  })
})

router.get('/mypost',requireLogin,(re, res) => {
  Post.find({author:req.user._id})
  .populate("Posted by: ","_id name")
  .then(mypost => {
    res.json({mypost})
  })
  .catch(err => {
    console.log(err)
  })

})

module.exports = router
