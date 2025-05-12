import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const port = 3000;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

const usuariosValidos = ["Maxi", "Tati", "Mauri", "Anto"];

// API de bienvenida
app.get("/bienvenida/:nombre", (req, res) => {
  const nombre = req.params.nombre;
  res.json(`Hola, ${nombre}!`);
  return console.log(nombre);
});

// API de validación de nombre
app.get("/validar/:nombre", (req, res) => {
  const nombre = req.params.nombre;
  const esValido = usuariosValidos.includes(nombre);
  res.json({ nombre, valido: esValido });
});

// app.get("/", (req, res) => {
//   if (req.query.nombre) {
//     res.json({ mensaje: `Hola, ${req.query.nombre}!` });
//   } else {
//     res.sendFile(path.join(__dirname, "../frontend/public/index.html"));
//   }
// });

app.listen(port, () => {
  console.log(`servidor corriendo en el puerto ${port}`);
});
