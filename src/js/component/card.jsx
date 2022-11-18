import React from "react"; /*OJO ESTE CARD ES UN CASCARÓN VACÍO QUE SE LLENA CON PARAMS. POR TANTO NO CONSUME CONTEXTO .... 1) Importar el hook useContext */
import { Link } from "react-router-dom";

export const Card = (props) => { //ACÁ PASAMOS PROPS COMO ARGUMENTO PARA CARGAR EL CONTENIDO MEDIANTE PROPS// 

  return (
    <div key={props.uid} className="container overflow">  {/* //OJO ACÁ CARGAMOS EL UID DE LA CARD POR PROPS//   */}
      <div className="card mx-auto" style={{ width: "24rem" }}>
        <img
          src={props.img}  //OJO ACÁ CARGAMOS LA IMAGEN POR PROPS// 
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5> {/* //OJO ACÁ CARGAMOS EL NOMBRE POR PROPS//   */}
          {props.content}
          <Link
            to={props.link} //OJO ACÁ CARGAMOS EL LINK POR PROPS// 
            className="btn btn-primary float-start"
          >
            More info
          </Link>
          <a href="#"  onClick={props.favorite} className="btn btn-outline-warning float-end">
            💛
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
// onClick={()=>{actions.addFavorites(props.name)}} 