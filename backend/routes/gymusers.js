const router = require("express").Router();
let GymUser = require("../models/gymuser.model");

// endpoint for localhost:5000/users/ that returns all users
router.route("/").get((req, res) => {
  GymUser.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

// endpoint for localhost:5000/users/add that adds a
// new user given a username
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const newUser = new GymUser({ username });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// ":id" is like a variable
// given an user id, return the user
router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

// given an user id, delete the user
router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
