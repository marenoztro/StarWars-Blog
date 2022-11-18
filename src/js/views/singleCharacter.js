import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleCharacter = props => {
	const { store, actions } = useContext(Context);
	console.log(useParams());
	const params = useParams();
	// console.log(store.infoCharacter)


	useEffect (()=>{
		actions.getInfoCharacters(params.theid);
	},[])


	return (
		<div className="jumbotron ms-5">
			<div className="container-flex text-center mt-5 d-flex overflow-auto">
   		   <img src= {"https://starwars-visualguide.com/assets/img/characters/"+ params.theid +".jpg"}/> 			
		   <div className="container-flex text-start ms-5">
		   <h2 className="display-4 fw-bold">{store.infoCharacters.properties?.name}</h2>
			<h6>Birth Year: {store.infoCharacters.properties?.birth_year}</h6>
			<h6>Height: {store.infoCharacters.properties?.height}</h6>
			<h6>Skin Color: {store.infoCharacters.properties?.skin_color}</h6>
			<h6>Gender: {store.infoCharacters.properties?.gender}</h6>
			<h6>About this character: {store.infoCharacters?.description}</h6>
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

SingleCharacter.propTypes = {
	match: PropTypes.object
};
{/* <h1>{store.infoCharacter.properties?.name}</h1>  */}
{/* <img src= {"https://starwars-visualguide.com/assets/img/characters/"+ item.uid +".jpg"}/>  */}
{/* <h2 className="display-4">This will show the demo element: {params.theid}</h2> */}