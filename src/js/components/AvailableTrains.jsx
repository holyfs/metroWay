import React from "react";

const AvailableTrains = ({ origin, departTime, arrival, ticketId, destination, passengers })=>{
    return (<>
        <div className="card" style={{ width: 35 + "rem" }}>
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
                    {/*                 <a  className="card-link">Card link</a>
                <a  className="card-link">Another link</a> */}
                </div>
            </div>
        </div>
    </>
    );
};
export default AvailableTrains;