import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const port = 3000;
const app = express();

// Simular __dirname en ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.get("/", (req, res) => {
  if (req.query.nombre) {
    res.json({ mensaje: `Hola, ${req.query.nombre}!` });
  } else {
    res.sendFile(path.join(__dirname, "../frontend/public/index.html"));
  }
});

app.listen(port, () => {
  console.log(`servidor corriendo en el puerto ${port}`);
});
