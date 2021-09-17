"use strict";

var http = require("http"); // create server object


http.createServer(function (req, res) {
  res.write("Hello World!");
  res.end();
}).listen(8080);
/**
 *  I found the result Hello World! in my browser.
 */

HTMLAnchorElement;