import favorites from "./starWarsApi/favorites";
import people from "./starWarsApi/people";
import vehicles from "./starWarsApi/vehicles";

const getState = ({
    getStore, // OJO: OBTIENE INFO DE STORE EN EL CONTEXTO DEL FLUX
    getActions, // OJO: OBTIENE INFO DE ACTIONS EN EL CONTEXTO DEL FLUX
    setStore //CAMBIAR EL VALOR DE ALGÚN DATO QUE TENGA EN STORE EN EL CONTEXTO DEL FLUX
}) => {
    return {
        store: {
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ],
            ...people.store,
            ...favorites.store,
            ...vehicles.store
            // characters: [],
            /**OJO AQUÍ (EN EL STORE DE FLUX) ESTOY CREANDO UN
             * NUEVO ESTADO PARA LOS characters QUE VOY A BUSCAR OBTENER DEL API DE STARWARS
             **/
            // infoCharacters: {},
            /**OJO AQUÍ (EN EL STORE DE FLUX) ESTAMOS HACIENDO LO MISMO PARA detalles del Personaje*/
        },

        actions: {
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            ...people.actions(getStore, getActions, setStore), // OJO AQUÍ ACTIVAS LAS FUNCIONES CONSTRUIDAS EN store people 
            ...vehicles.actions(getStore, getActions, setStore), // OJO AQUÍ ACTIVAS LAS FUNCIONES CONSTRUIDAS EN store vehicles  
            ...favorites.actions(getStore, getActions, setStore),
            // favorites: favorites.actions(getStore, getActions, setStore),
            // Use getActions to call a function within a fuction
            /** OJO: AQUÍ (EN EL ACTIONS DE FLUX) ESTOY HACIENDO EL FETCH
             *PARA LLAMAR Y CONSUMIR EL API DE STARWARS
             **/

            /** OJO: ACÁ USAMOS LA FUNCIÓN setStore,
             * characters ES EL ELEMENTO AL QUE QUEREMOS modificar,
             * Y data.results SON LOS DATOS CON LOS QUE QUERÉS MODIFICAR EL ESTADO characters en STORE*/
            /*
            loadCharacters: () => {
                fetch('https://www.swapi.tech/api/people/')
                    .then((response) => response.json())
                    .then(data => setStore({
                        characters: data.results
                    }))
                console.log(getStore())
         
            },


            getInfoCharacters: (uid) => {
                fetch('https://www.swapi.tech/api/people/'+uid)
                    .then((response) => response.json())
                    .then(data => setStore({
                        infoCharacters: data.result
                    }))
                    .then(data => console.log(data))
                    console.log(getStore())
            },*/






            // loadVehicles: () => {
            //     fetch('https://swapi.dev/api/vehicles/')
            //         .then((response) => response.json())
            //         .then(data => setStore({
            //             vehicles: data.results
            //         }))
            //     console.log(getStore())
            //     //	.then(data => setStore({ "foo": data.bar }))*/ 
            // },


            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo
                });
            }
        }
    };
};

export default getState;