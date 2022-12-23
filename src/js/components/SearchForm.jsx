import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import DateIn from "../components/DateIn.jsx";
import DateOut from "../components/DateOut.jsx";
import Passengers from "../components/Passengers.jsx";
import Origin from "../components/Origin.jsx";


const SearchForm=()=>{
    const { store, actions } = useContext(Context);
    const [travelInfo, setTravelInfo]= useState({
        date_time_depart:null,
        date_time_arrival:null,
        number_of_passengers:null,
        origin:null
    })

    const [date_time_depart, setDate_time_depart]=useState(null);
    const [date_time_arrival, setDate_time_arrival]=useState(null);
    const [number_of_passengers, setNumber_of_passengers]=useState(null);
    const [origin, setOrigin]=useState(null);

    useEffect((date_time_depart,date_time_arrival,number_of_passengers,origin)=>{
        formJson(date_time_depart,date_time_arrival,number_of_passengers,origin)
    },[])

    const formJson=(dTD,dTA,nOP,departure)=>{
        setTravelInfo({
            date_time_depart: dTD,
            date_time_arrival:dTA,
            number_of_passengers:nOP,
            origin:departure,
        })
    }
    const onSubmit=(dTD,dTA,nOP,departure)=>{
        if(dTD.length > 0  && nOP.length > 0){
        formJson(dTD,dTA,nOP,departure)
        actions.StoreTravelInfo(dTD,dTA,nOP,departure)
        }
    }
    console.log()
    return(<>
        <div className="position-absolute top-50 start-50 translate-middle mt-5 formulario mb-5 pb-3 pt-1 mt-5">
            <div className="d-flex flex-column justify-content-start align-items-center align-content-center mt-2 mb-2">
                <div><DateIn changed={(value) => setDate_time_depart(value?value.format("DD/MM/YYYY kk:mm"):value)}/></div>
                <div className="mt-1"><DateOut changed={(value) => setDate_time_arrival(value?value.format("DD/MM/YYYY kk:mm"):value)} /></div>
                <div className="mt-3"><Passengers changed={(value) => setNumber_of_passengers(value)} /></div>
                <div className="mt-3"><Origin changed={(value) => setOrigin(value)}/></div>
            </div>
            <div className="d-flex flex-column justify-content-end align-items-end align-content-end mt-2 mb-1 me-2">

                <button 
                type="submit" 
                className="btn btn-primary" 
                onClick={()=>onSubmit(date_time_depart,date_time_arrival,number_of_passengers,origin)}
                >
                    Search
                </button>

            </div>
        </div>
    </>);
};
export default SearchForm;