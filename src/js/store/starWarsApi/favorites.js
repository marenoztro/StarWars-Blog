const favorites = {
    store: {
        favorites: []
    },
    actions: (getStore, getActions, setStore) => {
        return {
            addFavorites: (param) => {
                const store = getStore();
                if (store.favorites.includes(param)) {
                    console.log("LO AGREGASTE A TUS FAVORITOS")
                } else {
                    setStore({
                        favorites: [...store.favorites, param]
                    })
                }
            },
            removeFavorites: (itemToDelete) => {
                const store = getStore();
                const newFavorites = store.favorites.filter((item) => item !== itemToDelete)
                setStore({
                    favorites: newFavorites
                })
            }
        }
    }
}
export default favorites



//             addFavorites: (param) => {
//                 const store = getStore();
//                 if (store.favorites.includes(param)) {
//                     console.log("LO AGREGASTE A TUS FAVORITOS")
//                 } else {
//                     setStore({
//                         favorites: [...store.favorites, param]
//                     })
//                 }
//             },
//             removeFavorites: (itemToDelete) => {
//                 const store = getStore();
//                 const newFavorites = store.favorites.filter((item) => item !== itemToDelete)
//                 setStore({
//                     favorites: newFavorites
//                 })
//             }
//         }
//     }
// }