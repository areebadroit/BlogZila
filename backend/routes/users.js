const router = require('express').Router();
let User = require('../models/users.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

router.route('/register').post((req, res) => {
  const password = req.body.password;
  const newUser = new User({
    username: req.body.username,
    lastname: req.body.lastname,
    firstname: req.body.firstname,
    name: req.body.firstname + ' ' + req.body.lastname,
    dob: req.body.dob,
    contact: req.body.contact,
    email: req.body.emaill,
  });
  newUser
    .save()
    .then(() => res.json('User Added'))
    .catch(err => res.status(400).json(`Error: ${+err}`));
});

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/update/:id').post((req, res) => {
  const updatedUser = {
    username: req.body.username,
    lastname: req.body.lastname,
    firstname: req.body.firstname,
    name: req.body.firstname + ' ' + req.body.lastname,
    dob: req.body.dob,
    contact: req.body.contact,
    email: req.body.emaill,
  };
  User.findByIdAndUpdate(req.params.id, updatedUser)
    .then(updatedUser => res.json(updatedUser))
    .catch(err => res.json(err));
});

router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json(`User Deleted`))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
