import React, {useContext} from "react"; /** OJO PASOS PARA CONSUMIR CONTEXTO: 1) Importar el hook useContext */
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Characters from "../component/characters.jsx";
import Vehicles from "../component/vehicles.jsx";
import { Context } from "../store/appContext";/** 2) IMPORTAR EL Context QUE CREAMOS*/




export const Home = () => {
	
	const {store, actions} = useContext(Context) /** 3) LLAMAR A LA FUNCIÓN useContext PARA QUE CONSUMA EL CONTEXTO PASÁNDOLE COMO PARÁMETRO (Context) SIEMPRE ANTES DE RETURN*/

	return (
	<>
	<div >
	<h1 className = "ms-2 text-black">Characters</h1>
	<div className="container-flex text-center mt-5 d-flex overflow-auto">
	< Characters/>
	</div> 
	</div> 


	<div >
	<h1 className = "ms-2 text-black">Vehicles</h1>
	<div className="container-flex text-center mt-5 d-flex  overflow-auto">
	< Vehicles />
	
	</div>
	</div> 

	</>



);}