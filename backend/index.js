const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

app.get("/", (req, res) => res.send("Hola, soy Daviel Sanchez!"));

app.get("/github-info", async (req, res) => {
  try {
    const headers = {
      Authorization: `token ${GITHUB_TOKEN}`,
      "User-Agent": "Node-Fetch-App",
      Accept: "application/vnd.github.v3+json",
    };

    const [userResponse, reposResponse] = await Promise.all([
      fetch("https://api.github.com/user", { headers }),
      fetch("https://api.github.com/user/repos", { headers }),
    ]);

    if (!userResponse.ok || !reposResponse.ok) {
      throw new Error("Error al obtener datos de GitHub");
    }

    const userData = await userResponse.json();
    const reposData = await reposResponse.json();

    res.json({
      user_crudo: userData,
      repos_crudo: reposData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Hubo un problema con la API de GitHub" });
  }
});

app.listen(port, () =>
  console.log(`Aplicacion corriendo en el puerto: ${port}!`),
);
