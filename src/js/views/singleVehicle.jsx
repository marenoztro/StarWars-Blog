import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleVehicle = props => {
	const { store, actions } = useContext(Context);
	console.log(useParams());
	const params = useParams();
	// console.log(store.infoVehicle)


	useEffect (()=>{
		actions.getInfoVehicle(params.theid);
	},[])


	return (
		<div className="jumbotron ms-5">
			<div className="container-flex text-center mt-5 d-flex overflow-auto">
   		   <img src= {"https://starwars-visualguide.com/assets/img/vehicles/"+ params.theid +".jpg"}/> 			
		   <div className="container-flex text-start ms-5">
		   <h2 className="display-4 fw-bold">{store.infoVehicle.properties?.name}</h2>
			<h6>Description: {store.infoVehicle.properties?.description}</h6>
			<h6>Cargo capacity: {store.infoVehicle.properties?.cargo_capacity}</h6>
			<h6>Cost in credits: {store.infoVehicle.properties?.cost_in_credits}</h6>
			<h6>Passengers: {store.infoVehicle.properties?.passengers}</h6>
			<h6>Length: {store.infoVehicle?.length}</h6>
			</div>
			<hr className="my-4" />
			</div>
			<Link to="/">
				<span className=" mt-3 btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};


SingleVehicle.propTypes = {
	match: PropTypes.object
};
















//     return <>
//     <h1 className="text-danger">{store.vehiclesInfo?.properties?.name}</h1>
//     <div className="card mb-3 fs-2 bg-dark text-light" style={{maxWidth: '1440px'}}>
//   <div className="row g-0">
//     <div className="col-md-4">
//       <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.uniqueid}.jpg`} className="img-fluid rounded-start" alt="..."/>
//     </div>
//     <div className="col-md-8 fs-4">
//       <div className="card-body">
//         <p className="card-title">Description: <span className="text-danger">{store.vehiclesInfo?.description}</span></p>
//         <p className="card-text">Cargo capacity: <span className="text-danger">{store.vehiclesInfo?.properties?.cargo_capacity}</span> </p>
//         <p className="card-text">Cost in credits: <span className="text-danger">{store.vehiclesInfo?.properties?.cost_in_credits}</span></p>
//         <p className="card-text">Passengers: <span className="text-danger">{store.vehiclesInfo?.properties?.passengers}</span></p>
//       </div>
//     </div>
//   </div>
// </div>
// <div className="container-fluid">
//   <div className="row">
//     <div className="col-3 bg-dark text-light">Length: <span className="text-danger">{store.vehiclesInfo?.properties?.length}</span> </div>
//     <div className="col-3">Manufacturer: <span className="text-danger">{store.vehiclesInfo?.properties?.manufacturer}</span></div>
//     <div className="col-3 bg-dark text-light">Vehicle class: <span className="text-danger">{store.vehiclesInfo?.properties?.vehicle_class}</span></div>
//     <div className="col-3">Crew: <span className="text-danger">{store.vehiclesInfo?.properties?.crew}</span></div>
  
   
//   </div>
// </div>
//     </>
// }

// export default SingleVehicle


















{/* <h1>{store.infoCharacter.properties?.name}</h1>  */}
{/* <img src= {"https://starwars-visualguide.com/assets/img/characters/"+ item.uid +".jpg"}/>  */}
{/* <h2 className="display-4">This will show the demo element: {params.theid}</h2> */}


// import React, { useState, useEffect, useContext } from "react";
// import PropTypes from "prop-types";
// import { Link, useParams } from "react-router-dom";
// import { Context } from "../store/appContext";

// export const SingleVehicle = props => {
// 	return (

// 		<div className="card mb-3"style={{width: "240px,"}}>
// 		<div className="row no-gutters">
// 		  <div className="col-md-4">
// 			<img src="https://bbts1.azureedge.net/images/p/full/2017/11/96ccd4dd-4418-4777-a941-1d82f60813ed.jpg" className="card-img" alt="..."/>
// 		  </div>
// 		  <div className="col-md-8">
// 			<div className="card-body">
// 			  <h5 className="card-title">HALCÓN MILENARIO</h5>
// 			  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
// 			  <p className="card-text"><small className="text-muted">Besó a su hermana</small></p>
// 			</div>
// 		  </div>
// 		</div>
// 	  </div>

// 	)
// };

// SingleVehicle.propTypes = {
// 	match: PropTypes.object}
