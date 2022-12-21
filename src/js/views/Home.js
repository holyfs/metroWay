import React from "react";
import DateIn from "../components/DateIn.jsx";
import DateOut from "../components/DateOut.jsx";
import Passengers from "../components/Passengers.jsx";
import TimeIn from "../components/TimeIn.jsx";
import TimeOut from "../components/TimeOut.jsx";
import SearchButton from "../components/SearchButton.jsx";
import "../../styles/Home.css";

const Home = ()=>{
    return(<>
        <div className="container fluid">
            <div className="text-center mt-5">
                <header>
                    <h1>Get your tickets to our solar train</h1>
                    <h3>Connecting Paris to London</h3>
                </header>
            </div>
            <div className="container fluid">
                <div className="position-absolute top-50 start-50 translate-middle mt-5 formulario mb-5 pb-3 pt-1">
                    <div className="d-flex flex-column justify-content-start align-items-center align-content-center mt-2 mb-2">
                        <div><DateIn /></div>
                        <div className="mt-1"><DateOut /></div>
                        <div className="mt-3"><Passengers /></div>
                        <div className="mt-3"><TimeIn /></div>
                        <div className="mt-1"><TimeOut /></div>
                    </div>
                    <div className="d-flex flex-column justify-content-end align-items-end align-content-end mt-5 mb-2 me-2">
                        <div>
                            <SearchButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
};
export default Home;