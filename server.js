require("rootpath")();
const express = require("express");
const bodyParser = require("body-parser");
const addRequestId = require("express-request-id");
const cors = require("cors");
const jwt = require("_helpers/jwt");
const errorHandler = require("_helpers/error-handler");

const app = express();
app.use(addRequestId());
app.use(bodyParser.json());
app.use(cors());

//use JWT auth to seure the api

// app.use(jwt());

//api routes
app.use('/users',require('./users/users.controller'));

//global error handler
app.use(errorHandler);

app.get("/", (req, res) => {
  res.json({ message: "hello world", requestId: req.id });
});

app.get("/foo", ({ id, query }, res, next) => {
  const { bar } = query;
  res.json({ message: "successfull", bar: `${bar}`, requestId: id });
});

app.post("/foo", ({ id, body }, res, next) => {
  const { bar } = body;

  if (typeof bar === "undefined") {
    return res.status(400).json({ error: "missing `bar`", requestId: id });
  }

  res.json({ message: "successfull", bar: `${bar}`, requestId: id });
});

const server = app.listen(8081, function() {
  const port = server.address().port;
  console.log("Example app listening to port %s", port);
});
