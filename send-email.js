import express from "express";
import fs from "fs";
import Correo from "./correo.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  fs.createReadStream("index.html").pipe(res);
});

app.get("/send-email", async (req, res) => {
  const { email, asunto, cuerpo } = req.query;

  const emailSender = new Correo(email, asunto, cuerpo);

  try {
    await emailSender.EnviarCorreo();
    res.send("Email enviado sastifactoriamente!");
  } catch (error) {
    console.error("Error enviando email:", error);
    res.status(500).send("Error enviando email.");
  }
});

app.listen(3000, () => console.log("Server listening on port 3000"));
