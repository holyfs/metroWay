import React, { useContext } from "react";

import { Context } from "../store/appContext";
import { SlTrash } from "react-icons/sl";

const TicketInCart=({origin, departTime, arrival, ticketId, destination, passengers})=>{

    const { actions } = useContext(Context);
    const trashSize={
        width: 20+"px",
        height: 20+"px"
}
const deleteTicket=(id)=>{
    actions.deleteTickets(id);

}
    return(<>
   <div className="card" style={{ width: 20 + "rem" }}>
            <h5 className="card-title ms-5 mt-3"><strong>Train number:</strong> {ticketId} </h5>
            <div className="card-body">
                <div className="row">
                    <div className="col-5 offset-1">
                        <p className="card-subtitle text-muted"><strong>Origin:</strong> {origin} </p> 
                        <p className="card-subtitle text-muted"><strong>Destination:</strong> {destination} </p>
                        <p className="card-subtitle mt-1 mb-1 text-muted"><strong>Passengers:</strong> {passengers} </p>
                    </div>
                    <div className="col-6">
                        <h6 className="card-subtitle mb-2 text-muted"><strong>Depart time:</strong> {departTime} </h6>
                        <h6 className="card-subtitle mb-2 text-muted"><strong>Arrival:</strong> {arrival} </h6>
                    </div>
                    <div className="d-grid gap-2 d-md-block ms-4">
                        <SlTrash style={trashSize} type="button" onClick={()=>deleteTicket(ticketId)}/>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}
export default TicketInCart;