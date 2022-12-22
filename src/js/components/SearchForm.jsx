import React, { useState } from "react";
import moment from 'moment';
import DateIn from "../components/DateIn.jsx";
import DateOut from "../components/DateOut.jsx";
import Passengers from "../components/Passengers.jsx";
/* import TimeIn from "../components/TimeIn.jsx";
import TimeOut from "../components/TimeOut.jsx"; */
import SearchButton from "../components/SearchButton.jsx";


const SearchForm=()=>{
    const [date_time_depart, setDate_time_depart]=useState(null);
    const [date_time_arrival, setDate_time_arrival]=useState(null);
    const [number_of_passengers, setNumber_of_passengers]=useState(null);
/*     const [time_in, setTime_in]=useState(null);
    const [time_out, setTime_out]=useState(null); */
    console.log("este de ir"+date_time_depart);
    console.log("llegada"+date_time_arrival);
    console.log("pasajeros"+number_of_passengers);
/*     console.log("tiempo"+time_in);
    console.log("tiempoOut"+time_out); */


/*     const valueDateFormatDTDepart=(value)=>{
        setDate_time_depart(value.format("DD"+"/"+"MM"+"/"+"YY"))
    }
    const valueDateFormatDTArrival=(value)=>{
        console.log(value.format("DD"+"/"+"MM"+"/"+"YY"))
    } */

/*     const handleChanged = (value) => {
        if(typeof value==="object"){
            valueDateFormatDTDepart(value)
        }else if(typeof value==="string"){
            console.log(value)
        }
    } */

    const [travelInfo, setTravelInfo]= useState({
        date_time_depart:" ",
        date_time_arrival:" ",
        number_of_passengers: " ",
        time_in: " ",
        time_out: " "
    })
    return(<>
        <div className="position-absolute top-50 start-50 translate-middle mt-5 formulario mb-5 pb-3 pt-1 mt-5">
            <div className="d-flex flex-column justify-content-start align-items-center align-content-center mt-2 mb-2">
                <div><DateIn changed={(value) => setDate_time_depart(value?value.format("DD/MM/YYYY kk:mm"):value)}/></div>
                <div className="mt-1"><DateOut changed={(value) => setDate_time_arrival(value?value.format("DD/MM/YYYY kk:mm"):value)} /></div>
                <div className="mt-3"><Passengers changed={(value) => setNumber_of_passengers(value)} /></div>
{/*                 <div className="mt-3"><TimeIn changed={(value) => setTime_in(value)} /></div>
                <div className="mt-1"><TimeOut changed={(value) => setTime_out(value)} /></div> */}
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