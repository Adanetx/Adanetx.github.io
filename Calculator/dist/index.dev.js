"use strict";

var express = require("express");

var app = express();
var port = 8080;
app.use(express.urlencoded({
  extended: false
}));
app.post("/index", function (req, res) {
  var x = parseInt(req.body.first, 10);
  var y = parseInt(req.body.second, 10);
  var result = "";
  var cal = req.body.calculate;

  switch (cal) {
    case "add":
      result = x + y;
      break;

    case "subtract":
      result = x - y;
      break;

    case "multiply":
      result = x * y;
      break;

    case "division":
      result = x / y;
      break;
  }

  res.send("<h3 style=\"width: 50%; margin-left: auto;\n     marigin-right: auto\" >The Answer is: ".concat(result, " <br>\n      <a href =\"http://localhost:8080/\"> another calculation</a> </h3>"));
});
app.get("/", function (req, res) {
  res.sendFile("index.html", {
    root: __dirname
  });
});
app.listen(port);