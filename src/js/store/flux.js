import moment from "moment";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			travelInfoStore: [],
			availableTickets: [],
			cart: [],

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
			listTickets: () => {
				const store = getStore();
				return store.cart;
			},

			addToCart: (origin, departTime, arrival, ticketId, destination, passengers) => {
				const store= getStore();
				const newTicket = {};
				newTicket.origin = origin;
				newTicket.ticketId = ticketId;
				newTicket.departTime = departTime;
				newTicket.arrival = arrival;
				newTicket.passengers = passengers;
				newTicket.destination = destination;
				const auxTicket=[...store.cart, newTicket]
				setStore({ cart: auxTicket });
			},
			deleteTickets: (ticketId) => {
				const store = getStore();
				const data = store.cart.filter((item) => item.ticketId !== ticketId);
				setStore({ ...store, cart: data });
			},

		}
	};
};

export default getState;