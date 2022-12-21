const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes:[],
			vehicles:[],
			planets:[],
			travelInfoStore:[],
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
			StoreTravelInfo : (date_time_depart, date_time_arrival, number_of_passengers, time_in, time_out) => {
				const store = getStore();
				const newTravel = {};
				newTravel.date_time_depart = date_time_depart;
				newTravel.date_time_arrival = date_time_arrival;
				newTravel.number_of_passengers = number_of_passengers;
				newTravel.time_in = time_in;
				newTravel.time_out = time_out;
				const auxTravel = [...store.travelInfoStore, newTravel]; 
		
				setStore({ travelInfoStore: auxTravel });
			},

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