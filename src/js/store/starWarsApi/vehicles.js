const vehicles = {
    store: {
        allvehicles: [],
        infoVehicle: {},
    },
    actions: (getStore, getActions, setStore) => {
        return {
            loadVehicles: () => {
                fetch('https://www.swapi.tech/api/vehicles/')
                    .then((response) => response.json())
                    .then(data => setStore({
                        ...getStore(),
                        allvehicles: data.results
                    }))
                console.log(getStore())
            },
            getInfoVehicle: (uid) => {
                fetch('https://www.swapi.tech/api/vehicles/' + uid)
                    .then((response) => response.json())
                    .then(data => setStore({
                        ...getStore(),
                        infoVehicle: data.result
                    }))
                    .then(data => console.log(data))
                console.log(getStore())
            },
        }
    }
}
export default vehicles