import React, { useContext, useEffect } from "react";
import AvailableTrains from "../components/AvailableTrains.jsx";
import UserSearch from "../components/UserSearch.jsx";
import train_results from "../../assets/variables/train_results.json"
import { Context } from "../store/appContext";

const Tickets=()=>{
    const { store, actions } = useContext(Context);
    /*     console.log(store.travelInfoStore); */
    useEffect(()=>{
        actions.GetTickets(store.travelInfoStore, train_results)
    },[])
        console.log(store.availableTickets);
    return (
        <>
            <div className="container fluid">
                <div className="d-flex justify-content-evenly">
                <div className="row mt-5">
                    <div className="col">
                        <UserSearch />
                    </div>
                    <div className="col">
                        <h3 className="mb-2 mt-2">These are the available trains...</h3>
                        {store.availableTickets ? store.availableTickets.map(ticket => {
                            console.log(ticket)
                            return <><div className="mt-2 mb-1">
                                <AvailableTrains
                                    origin={ticket.origin}
                                    destination={ticket.destination}
                                    arrival={ticket.date_time_arrival}
                                    departTime={ticket.date_time_depart}
                                    ticketId={ticket.flight_id}
                                    passengers={store.travelInfoStore.number_of_passengers}
                                /></div></>
                        }) : "loading..."}

                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default Tickets;