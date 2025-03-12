const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Serveren kjører!");
});

app.listen(PORT, () =>
  console.log(`Server kjører på http://localhost:${PORT}`)
);
