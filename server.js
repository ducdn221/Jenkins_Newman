require("rootpath")();
const express = require("express");
const bodyParser = require("body-parser");
const addRequestId = require("express-request-id");
const cors = require("cors");
const errorHandler = require("_helpers/error-handler");
const authorize = require("_helpers/authorize")
const Role = require("_helpers/role");

const app = express();
app.use(addRequestId());
app.use(bodyParser.json());
app.use(cors());

//use JWT auth to seure the api

//api routes
app.use('/users',require('./users/users.controller'));

//global error handler
app.use(errorHandler);

app.get("/",authorize([Role.Admin,Role.User]), (req, res) => {
  res.json({ message: "hello world", requestId: req.id });
});

app.get("/foo",authorize([Role.Admin,Role.User]), ({ id, query }, res, next) => {
  const { bar } = query;
  res.json({ message: "successfull", bar: `${bar}`, requestId: id });
});

app.post("/foo",authorize([Role.Admin,Role.User]), ({ id, body }, res, next) => {
  const { bar } = body;

  if (typeof bar === "undefined") {
    return res.status(400).json({ error: "missing `bar`", requestId: id });
  }

  res.json({ message: "successfull", bar: `${bar}`, requestId: id });
});

const server = app.listen(9090, function() {
  const port = server.address().port;
  console.log("Example app listening to port %s", port);
});
