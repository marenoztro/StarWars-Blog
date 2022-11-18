import React, {
  useState,
  useEffect,
  useContext,
} from "react"; /** OJO PASOS PARA CONSUMIR CONTEXTO: 1) Importar el hook useContext */

import { Link } from "react-router-dom";

import { Context } from "../store/appContext"; /** 2) IMPORTAR EL Context QUE CREAMOS*/

import "../../styles/demo.css";

export const Demo = () => {
  const { store, actions } =
    useContext(
      Context
    ); /** 3) LLAMAR A LA FUNCIÓN useContext PARA QUE CONSUMA EL CONTEXTO PASÁNDOLE COMO PARÁMETRO (Context) SIEMPRE ANTES DE RETURN*/

  return (
    <div className="container">
      <ul className="list-group">
        {" "}
        {store.demo.map((item, index) => {
          return (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between"
              style={{
                background: item.background,
              }}
            >
              <Link to={"/single/" + index}>
                <span> Link to: {item.title} </span>{" "}
              </Link>{" "}
              {
                // Conditional render example
                // Check to see if the background is orange, if so, display the message
                item.background === "orange" ? (
                  <p
                    style={{
                      color: item.initial,
                    }}
                  >
                    Check store / flux.js scroll to the actions to see the code{" "}
                  </p>
                ) : null
              }{" "}
              <button
                className="btn btn-success"
                onClick={() => actions.changeColor(index, "orange")}
              >
                Change Color{" "}
              </button>{" "}
            </li>
          );
        })}{" "}
      </ul>{" "}
      <br />
      <Link to="/">
        <button className="btn btn-primary"> Back home </button>{" "}
      </Link>{" "}
    </div>
  );
};
