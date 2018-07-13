const express = require("express");
const app = express();
var path = require("path");

app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist/"));

/** use of the public folder */
app.use("/public", express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
