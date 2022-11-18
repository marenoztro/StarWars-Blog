import React, {useContext} from "react"; /** OJO PASOS PARA CONSUMIR CONTEXTO: 1) Importar el hook useContext */
import {Context} from "../store/appContext" /** 2) IMPORTAR EL Context QUE CREAMOS*/
import Card from "./card.jsx";  /** OJO AQUÍ IMPORTAMOS LA CARD GENÉRICA QUE VAMOS A LLENAR CON PARAMS*/
import { Link } from "react-router-dom";


export const Vehicles = () => {
  console.log(useContext(Context))
  const {store, actions}=useContext(Context);  /** 3) LLAMAR A LA FUNCIÓN useContext PARA QUE CONSUMA EL CONTEXTO PASÁNDOLE COMO PARÁMETRO (Context) SIEMPRE ANTES DE RETURN*/
//  const allvehicles = [{birth_year, created, edited}, eye_color,, gender, hair_color, height, mass, name, skin_color, review]
        return (
<>
{store.allvehicles.map((item,i)=>{
  return ( 
    // <Card 
    //   uid={item.uid}
    //   img={"https://starwars-visualguide.com/assets/img/vehicles/"+ item.uid +".jpg"}
    //   name={item.name}
    //   // content={
    //   //   <div>
    //   //     <h5>Descubre más de este personaje</h5>
    //   //     <p>{item.gender}</p>
    //   //     <p>{item.hair_color}</p>
    //   //     <p>{item.eye_color}</p>
    //   //   </div>
    //   // }
    //   link={"/singleVehicle/"+item.uid}
    // />
    
      <div key={item.uid} className ="container overflow" >
          <div className ="card mx-auto" style =  {{width: "24rem"}} >
            <img src= {"https://starwars-visualguide.com/assets/img/vehicles/"+ item.uid +".jpg"}/> 
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.review}</p> 
              <Link to={"/singleVehicle/"+item.uid} className="btn btn-primary float-start">More info</Link>
              <a href="#" onClick={()=>{actions.addFavorites(item.name)}} className="btn btn-outline-warning float-end">💛</a>
            </div>
            </div>
      </div>
    
 )
})}  
</>
)
}


export default Vehicles  





// {/* <>
//     <div className ="card mx-auto" style =  {{width: "24rem"}} >
//       {/* {store.vehicles.map((intem,index)=>{})} */}
//      <img src= {"https://www.geekalerts.com/u/Luke-Skywalker-The-Empire-Strikes-Back-Premium-Format-Figure.jpg"}/>
//      <div className="card-body">
//        <h5 className="card-title">Lucas Trotacielos</h5>
//        <p>Gender: Male</p>
//        <p>Hair Color: Blonde</p>
//        <p>Eye Color: Green</p>
//        <p className="card-text">En una galaxia muy, muy lejana existía el héroe más mequetrefe de la historia.</p>
//        <Link to="/SingleCharacter" className="btn btn-primary float-start">Detalles del Personaje</Link>
//        <a href="#" className="btn btn-outline-warning float-end">💛</a>
//      </div>
//      </div>
// </>   */}

{/* <li>{item.name}</li> */}





  // const vehicles = ({name, height,}) 
// 	return (
// 	<>
// 	<h1 className = "text-black">vehicles</h1>
// 	<div className="container-flex text-center mt-5 d-flex">  
//         <ul className= "card-item" key={(i)}>  
//         {store.vehicles.map (item,index)} 
//         <p> {height}</p>
        
//         </ul>
    
// 	</div> 















// import React, {useContext} from "react"; /** OJO PASOS PARA CONSUMIR CONTEXTO: 1) Importar el hook useContext */
// import {Context} from "../store/appContext" /** 2) IMPORTAR EL Context QUE CREAMOS*/
// import { Link } from "react-router-dom";


// const Vehicles = () => {
//   console.log(useContext(Context))
//   const {store, actions}=useContext(Context);  /** LLAMAR A LA FUNCIÓN useContext PARA QUE CONSUMA EL CONTEXTO PASÁNDOLE COMO PARÁMETRO (Context) SIEMPRE ANTES DE RETURN*/
//         return (
// <>
//     <div className ="card mx-auto" style =  {{width: "24rem"}} >
//      <img src= {"https://bbts1.azureedge.net/images/p/full/2017/11/96ccd4dd-4418-4777-a941-1d82f60813ed.jpg"}/>
//      <div className="card-body">
//        <h5 className="card-title">Halcón Milenario</h5>
//        <p>Size: 120 m2</p>
//        <p>Weight: 50.000 pounds</p>
//        <p>Height: 22m</p>
//        <p className="card-text">La nave de Han Solo y Chewaca.</p>
//        <Link to="/SingleVehicle" className="btn btn-primary float-start">Detalles del Vehículo</Link>
//        <a href="#" className="btn btn-outline-warning float-end">💛</a>
//      </div>
//      </div>
// </>
// )
// }


// export default Vehicles  

