const express = require("express");
const router = express.Router();
const userService = require("./user.service");
const authorize = require("../_helpers/authorize")
const Role = require("../_helpers/role");

//routes
router.post("/authenticate", authenticate);
router.get('/', authorize(Role.Admin), getAll); // admin only
router.get('/:id', authorize(Role.Admin), getById);

module.exports = router;

function authenticate(req, res, next) {
  userService
    .authenticate(req.body)
    .then(user =>
      user
        ? res.json(user)
        : res.status(400).json({ message: "Username or password is incorrect" })
    )
    .catch(err => next(err));
}

function getAll(req, res, next) {
  userService
    .getAll()
    .then(users => res.json(users))
    .catch(err => next(err));
}

function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}
