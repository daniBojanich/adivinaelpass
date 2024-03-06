import "./LogIn.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

function LogIn() {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [Respuesta, setRespuesta] = useState("");
  const [MostrarPista, setMostrarPista] = useState(false);
  const [pistaIndex, setpistaIndex] = useState(0);

  const pistas = [
    "es comestible.",
    "ideal para la merienda.",
    "es dulce.",
    "Es masa + dulce + masa.",
    "tiene una decoración particular.",
    "dale Joni ponele voluntad.",
    "la gente se debate entre membrillo o dulce de batata.",
    "es una PASTAFROLA.",
    "Con la P mayúscula."
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === "Pastafrola") {
      setRespuesta("¡Acertaste!");
    } else {
      setRespuesta("Esa no es la contraseña.");
    }
  };

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleMostrarPista = () => {
    setMostrarPista(true);
  };

  const handleSiguientePista = () => {
    if (pistaIndex < pistas.length - 1) {
      setpistaIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <>
    
      <p className="saludo">Hola {nombre}</p>
      <div className="inputs">
        <FontAwesomeIcon icon={faUser} className="inputInterno"/> <input
          type="text"
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChange={handleNombreChange}
          className="inputInterno"
        />
      </div>
    
      <form onSubmit={handleSubmit}>
      
        <div className="inputs">
        <FontAwesomeIcon icon={faLock} className="inputInterno" />
        <input
          type="password"
          placeholder="Ingresa la contraseña"
          value={password}
          onChange={handlePasswordChange}
          className="inputInterno"
        /></div>
        
        <button className="ingresar">Iniciar Sesión</button>
      </form>

      <p className="respuesta">{Respuesta}</p>

      {MostrarPista && (
        <>
          
          {pistaIndex < pistas.length - 1 && <button className="botonChico" onClick={handleSiguientePista}>Mostrar Siguiente Pista</button>}<p>{pistas[pistaIndex]}</p>
        </>
      )}
      {!Respuesta && !MostrarPista && <button className="botonChico" onClick={handleMostrarPista}>¿Necesitas una pista?</button>}




    </>
  );
}

export default LogIn;
