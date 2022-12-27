import moment from "moment";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			travelInfoStore: [],
			availableTickets: [],
			favorites: [],

		},
		actions: {
			StoreTravelInfo: (date_time_depart, date_time_arrival, number_of_passengers, origin) => {
				const newTravel = {};
				newTravel.date_time_depart = date_time_depart;
				newTravel.date_time_arrival = date_time_arrival;
				newTravel.number_of_passengers = number_of_passengers;
				newTravel.origin = origin;
				if (newTravel.origin === "Paris") {
					newTravel.destination = "London"
				} else if (newTravel.origin === "London") {
					newTravel.destination = "Paris"
				} else {
					newTravel.destination = "null"
				}
				setStore({ travelInfoStore: newTravel });
			},

			GetTickets: (StoreTravelInfo, train_results) => {
				const results = train_results.filter((ticket) => ticket.origin === StoreTravelInfo.origin && ticket.available_seats >= StoreTravelInfo.number_of_passengers && moment(ticket.date_time_depart).isSameOrAfter(moment(StoreTravelInfo.date_time_depart)));
				setStore({ availableTickets: results })
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

		}
	};
};

export default getState;