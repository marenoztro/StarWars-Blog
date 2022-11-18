import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {Context} from "../store/appContext"

export const Navbar = () => {
  const {store, actions} = useContext(Context)

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        {" "}
        {/* <span className="navbar-brand mb-0 h1">React Boilerplate</span> */}{" "}
        <img
          style={{
            width: "120px",
          }}
          src={"https://www.freepnglogos.com/uploads/star-wars-logo-31.png"}
        />{" "}
      </Link>
      {/* <div className="float-start">
        <Link to="/SingleCharacter">
          <h5 className="float-start"> Detalles Personajes </h5>{" "}
        </Link>{" "}
      </div>
      <div className="float-start">
        <Link to="/SingleVehicle">
          <h5 className="float-start"> Detalles Vehículos </h5>{" "}
        </Link>{" "}
      </div> */}
      <div className="dropdown"style = {{margin: '60px'}}>
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites
  </button>
  <ul className="dropdown-menu col 8" >
 {store.favorites.map( (item, index) => {return <li className="bg-dark" key={index}><a className="dropdown-item bg-dark text-light" href="#">{item}<button onClick={()=> {actions.removeFavorites(item)} } className="btn-secondary float-start">❌</button></a></li>} )}
 </ul> 
</div>
</nav>
  );
};


// </div className="nav-item dropdown">
// </span className="nav-link dropdown-toggle bg-secondary text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false":
// Favorites{store.favoritos.length}</span>
// <ul className="dropdown-menu"aria-labelledby="navbarDropdown">
// {store.favoritos.mao((item)=><
// return <li><a className="dropdown-item"> <span onClick={() => { actions.eliminaFavorito(item.id) }} className={"fa fa-trash"}></span>{item.name}</a></li>

// })}

// {/* <ul className="dropdown-menu">
// {/* {store.favorites.map( (item, index) => {return <li className="bg-primary" key={index}><a className="dropdown-item bg-dark text-light" href="#">{item}<button onClick={()=> {actions.remove(item)} } className="btn-secondary float-end">x</button></a></li>} )} */}
// </ul> */}