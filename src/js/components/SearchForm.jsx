import React, { useState, useEffect } from "react";
/* import { useForm } from "react-hook-form"; */
/* import moment from 'moment'; */
import DateIn from "../components/DateIn.jsx";
import DateOut from "../components/DateOut.jsx";
import Passengers from "../components/Passengers.jsx";
/* import TimeIn from "../components/TimeIn.jsx";
import TimeOut from "../components/TimeOut.jsx"; */
/* import SearchButton from "../components/SearchButton.jsx"; */


const SearchForm=()=>{
    const [travelInfo, setTravelInfo]= useState({
        date_time_depart:null,
        date_time_arrival:null,
        number_of_passengers:null,
/*         time_in: " ",
        time_out: " " */
    })
/*     const { register, handleSubmit, watch, formState: { errors } } = useForm(); */
    const [date_time_depart, setDate_time_depart]=useState(null);
    const [date_time_arrival, setDate_time_arrival]=useState(null);
    const [number_of_passengers, setNumber_of_passengers]=useState(null);
/*     const [time_in, setTime_in]=useState(null);
    const [time_out, setTime_out]=useState(null); */
/*     console.log("tiempo"+time_in);
    console.log("tiempoOut"+time_out); */


/*     const valueDateFormatDTDepart=(value)=>{
        setDate_time_depart(value.format("DD"+"/"+"MM"+"/"+"YY"))
    }
    const valueDateFormatDTArrival=(value)=>{
        console.log(value.format("DD"+"/"+"MM"+"/"+"YY"))
    } */

/*     const handleChanged = (e) => {
        console.log(e)
        setTravelInfo({
            date_time_depart:depart,
            date_time_arrival:arrival,
            number_of_passengers:passengers
        })
        console.log(travelInfo);
    } */
    useEffect(()=>{
        formJson(date_time_depart,date_time_arrival,number_of_passengers)
    },[date_time_depart,date_time_arrival,number_of_passengers])

    const formJson=(dTD,dTA,nOP)=>{
        setTravelInfo({
            date_time_depart: dTD,
            date_time_arrival:dTA,
            number_of_passengers:nOP
        })
        console.log(travelInfo);
    }

    
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

                <button 
                type="submit" 
                className="btn btn-primary" 
                onClick={()=>formJson(date_time_depart,date_time_arrival,number_of_passengers)}>
                    Search
                </button>

            </div>
        </div>
    </>);
};
export default SearchForm;