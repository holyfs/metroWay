import React from "react";


const TicketGo=({origin, departTime, arrival, ticketId, destination, passengers})=>{

    return(<>
   <div className="card text-bg-secondary" style={{ width: 20 + "rem" }}>
            <h5 className="card-title ms-4 mt-3"><strong>Train number:</strong> {ticketId} </h5>
            <div className="card-body">
                <div className="row">
                    <div className="col-5 offset-1">
                        <p className="card-subtitle"><strong>Origin:</strong> {origin} </p> 
                        <p className="card-subtitle"><strong>Destination:</strong> {destination} </p>
                        <p className="card-subtitle mt-1 mb-1"><strong>Passengers:</strong> {passengers} </p>
                    </div>
                    <div className="col-6">
                        <h6 className="card-subtitle mb-2"><strong>Depart time:</strong> {departTime} </h6>
                        <h6 className="card-subtitle mb-2"><strong>Arrival:</strong> {arrival} </h6>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}
export default TicketGo;