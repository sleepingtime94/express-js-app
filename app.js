const express = require("express");
const app = express();
const server = require("http").createServer(app);

app.get("/", (req, res) => {
  res.send("Coming soon..");
});

server.listen(8000);
