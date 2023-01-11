import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom"

const AvailableTrains = ({ origin, departTime, arrival, ticketId, destination, passengers })=>{
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const addToCart=(origin, departTime, arrival, ticketId, destination, passengers)=>{
        actions.addToCart(origin, departTime, arrival, ticketId, destination, passengers)
        navigate("/ticketsreturn");
    }

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
                    <div className="d-grid gap-2 d-md-block ms-5">
                        <button className="btn btn-success" onClick={()=>addToCart(origin, departTime, arrival, ticketId, destination, passengers)} type="button" value="Add to cart">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};
export default AvailableTrains;