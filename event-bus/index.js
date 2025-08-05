const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/event", (req, res) => {
  const event = req.body;

  axios.post("http://localhost:4000/event", event);
  axios.post("http://localhost:4001/event", event);
  axios.post("http://localhost:4002/event", event);

  res.send({ status: "ok" });
});

const PORT = 4005;

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
