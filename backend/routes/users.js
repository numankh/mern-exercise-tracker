const router = require('express').Router();
let User = require('../models/user.model');

// endpoint for localhost:5000/users/ that returns all users
router.route('/').get((req, res) => {
User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// endpoint for localhost:5000/users/add that adds a 
// new user given a username
router.route('/add').post((req, res) => {
   const username = req.body.username;
   const newUser = new User({username});
   
   newUser.save()
   .then(() => res.json('User added!'))
   .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;