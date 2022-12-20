const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes:[],
			vehicles:[],
			planets:[],
			favorites: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
			
		},
		actions: {

			GetPeople : () => {
				 fetch("https://www.swapi.tech/api/people", {
				  method: "GET",
				  headers: {
					"Content-Type": "application/json",
				  },
				}).then((res) => {
					return res.json();
				  })
				  .then((data) => {
					setStore({personajes:data.results})
				  }).catch((err) => console.error(err))
			  },
			  GetPlanets : () => {
				 fetch("https://www.swapi.tech/api/planets", {
				  method: "GET",
				  headers: {
					"Content-Type": "application/json",
				  },
				})
				  .then((res) => {
					return res.json();
				  })
				  .then((data) => {
					setStore ({planets: data.results})
				   
				})
				  .catch((err) => console.error(err))
			  },
			  GetVehicles :() => {
				fetch("https://www.swapi.tech/api/vehicles", {
				  method: "GET",
				  headers: {
					"Content-Type": "application/json",
				  },
				})
				  .then((res) => {
					return res.json();
				  }).then((data) => {
					setStore ({vehicles: data.results})
				  })
				  .catch((err) => console.error(err))
			  },
			  listarFavorites: () => {
				const store = getStore();
				return store.favorites;
			  },
		
			  saveFavorite: (name, id) => {
				const store = getStore();
				const newFavorite = {};
				newFavorite.name = name;
				newFavorite.id = id;
				const auxFavorites = [...store.favorites, newFavorite]; 
		
				setStore({ favorites: auxFavorites });
			  },
			  deleteFavorites: (name) => {
				const store = getStore();
				const data = store.favorites.filter((item) => item.name !== name);
				setStore({ ...store, favorites: data });
			  },
			  numFavorites: () => {
				const store = getStore();
				return store.favorites.length;
			  },

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

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
				setStore({ demo: demo })
			}
		}
	};
};

export default getState;