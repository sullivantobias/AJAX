const express = require("express");
const app = express();
const path = require("path");

/** Load Libraries and use public folder */
app
  .use("/axios", express.static(__dirname + "/node_modules/axios/dist/"))
  .use("/jquery", express.static(__dirname + "/node_modules/jquery/dist/"))
  .use("/public", express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/public/text.js", function(req, res) {
 
});

app.listen(3000, function() {
  console.log("Running");
});
