const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

app.get(["/", "/exercises"], (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/exercises", async (req, res) => {
  try {
    const response = await fetch(
      "https://api.api-ninjas.com/v1/exercises?muscle=biceps",
      {
        method: "GET",
        headers: {
          "X-Api-Key": process.env.API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Noe gikk galt med API-kallet" });
  }
});

app.listen(PORT, () =>
  console.log(`Server kjører på http://localhost:${PORT}`)
);
