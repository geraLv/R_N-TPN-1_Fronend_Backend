import { useState } from "react";

function App() {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [esValido, setEsValido] = useState(null);

  const obtenerBienvenida = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/bienvenida/${nombre}`
      );
      const data = await response.text();
      setMensaje(data);
    } catch (error) {
      console.error("Error al obtener bienvenida:", error);
    }
  };

  const validarNombre = async () => {
    try {
      const response = await fetch(`http://localhost:3000/validar/${nombre}`);
      const data = await response.json();
      setEsValido(data.valido);
      obtenerBienvenida();
    } catch (error) {
      console.error("Error al validar el nombre:", error);
    }
  };

  return (
    <div
      style={{
        // textAlign: "center",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1>Ingrese su nombre</h1>
      <div style={{ padding: "4px" }}>
        <input
          type="text"
          value={nombre}
          style={{
            borderRadius: "5px",
            margin: "4px",
            width: "60%",
            height: "30px",
          }}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Escribe tu nombre"
        />
        {/* <button onClick={obtenerBienvenida}>Obtener Bienvenida</button> */}
        <button style={{ borderRadius: "5px" }} onClick={validarNombre}>
          Validar Nombre
        </button>
      </div>
      {esValido !== null && (
        <h3 style={{ color: esValido ? "green" : "red" }}>
          {esValido ? mensaje : "❌ Nombre inválido"}
        </h3>
      )}
    </div>
  );
}

export default App;
