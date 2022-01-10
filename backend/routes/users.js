const router = require("express").Router();

let User = require("../models/user.model");

// creates user
router.route("/add").post((request, response) => {
  const newUser = new User({
    username: request.body.username,
    email: request.body.email,
    password: request.body.password,
  });

  newUser
    .save()
    .then(() => response.json("User Added"))
    .catch((err) => response.status(400).json("Error: " + err));
  console.log(request.body);
});

// gets user

router.route("/:email").get((request, response) => {
  User.findOne({ email: request.params.email })
    .then((user) => response.json(user))
    .catch((err) => response.status(400).json("Error: " + err));
});

module.exports = router;
