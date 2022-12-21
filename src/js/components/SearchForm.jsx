import React, { useState } from "react";
import DateIn from "../components/DateIn.jsx";
import DateOut from "../components/DateOut.jsx";
import Passengers from "../components/Passengers.jsx";
import TimeIn from "../components/TimeIn.jsx";
import TimeOut from "../components/TimeOut.jsx";
import SearchButton from "../components/SearchButton.jsx";


const SearchForm=()=>{
    const handleChanged = (value) => {
        console.log(value);
    }
    const [travelInfo, setTravelInfo]= useState({
        date_time_depart:" ",
        date_time_arrival:" ",
        number_of_passengers: " ",
        time_in: " ",
        time_out: " "
    })
    return(<>
        <div className="position-absolute top-50 start-50 translate-middle mt-5 formulario mb-5 pb-3 pt-1">
            <div className="d-flex flex-column justify-content-start align-items-center align-content-center mt-2 mb-2">
                <div><DateIn changed={(value) => handleChanged(value)}/></div>
                <div className="mt-1"><DateOut changed={(value) => handleChanged(value)} /></div>
                <div className="mt-3"><Passengers changed={(value) => handleChanged(value)} /></div>
                <div className="mt-3"><TimeIn changed={(value) => handleChanged(value)} /></div>
                <div className="mt-1"><TimeOut changed={(value) => handleChanged(value)} /></div>
            </div>
            <div className="d-flex flex-column justify-content-end align-items-end align-content-end mt-5 mb-2 me-2">
            <div>
                <SearchButton />
            </div>
            </div>
        </div>
    </>);
};
export default SearchForm;