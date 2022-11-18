const people = {
    store: {
        characters: [],
        infoCharacters: {},
    },
    actions: (getStore, getActions, setStore) => {
        return {
            loadCharacters: () => {
                fetch('https://www.swapi.tech/api/people/')
                    .then((response) => response.json())
                    .then(data => setStore({
                        ...getStore(),
                        characters: data.results
                    }))
                console.log(getStore())
            },
            getInfoCharacters: (uid) => {
                fetch('https://www.swapi.tech/api/people/' + uid)
                    .then((response) => response.json())
                    .then(data => setStore({
                        ...getStore(),
                        infoCharacters: data.result
                    }))
                    .then(data => console.log(data))
                console.log(getStore())
            },
        }
    }
}
export default people