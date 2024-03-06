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
    "Con solo la P en mayúscula.",
  ];

  const Enviar = (e) => {
    e.preventDefault();

    if (password === "Pastafrola") {
      setRespuesta("¡Acertaste!");
    } else {
      setRespuesta("Esa no es la contraseña.");
      botonPistas.style= "display: block";
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
    botonPistas.style= "display: none";

  };

  const handleSiguientePista = () => {
    if (pistaIndex < pistas.length - 1) {
      setpistaIndex((prevIndex) => prevIndex + 1);
    
    }
  };

  return (
    <>
      <p className="saludo">{nombre != "" ? "hola " + nombre + "!!" : ""}</p>
      <div className="inputs">
        <FontAwesomeIcon icon={faUser} className="inputInterno" />{" "}
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChange={handleNombreChange}
          className="inputInterno"
        />
      </div>

    
        <div className="inputs">
          <FontAwesomeIcon icon={faLock} className="inputInterno" />
          <input
            type="password"
            placeholder="Ingresa la contraseña"
            value={password}
            onChange={handlePasswordChange}
            className="inputInterno"
          />
        </div>

        <button onClick={Enviar} className="ingresar">Iniciar Sesión</button>
    

      <p className="respuesta">{Respuesta}</p>

      {/* {!Respuesta && MostrarPista && (
        <button className="botonChico" onClick={handleMostrarPista}>
          ¿Necesitas una pista?
        </button>
      )} */}

      {Respuesta != "Pastafrola" || "" ? (
        <button style= {{display: 'none'}} id="botonPistas" className="botonChico" data-soyyo="boton que quiero" onClick={handleMostrarPista}>
          ¿Necesitas una pista?
        </button>
      ) : null}
      {MostrarPista && (
        <>
          {pistaIndex < pistas.length - 1 && (
            <button className="botonChico" onClick={handleSiguientePista}>
              Mostrar Siguiente Pista
            </button>
          )}
          <p className="pistas">{pistas[pistaIndex]}</p>
        </>
      )}
    </>
  );
}

export default LogIn;
