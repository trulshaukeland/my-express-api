const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors()); // Tillater frontend-forespørsler
app.use(express.json());

// Root-endepunkt for å unngå "Cannot GET /" feilen
app.get("/", (req, res) => {
  res.send("Serveren kjører!");
});

// Henter bicepsøvelser fra API
app.get("/exercises", async (req, res) => {
  try {
    const response = await fetch(
      "https://api.api-ninjas.com/v1/exercises?muscle=biceps",
      {
        method: "GET",
        headers: {
          "X-Api-Key": "VRMrYMsPsy3J1UwKVxCVOQ==sIdjhavkZ2Ia5GjA",
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
