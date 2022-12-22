import React from "react";

import "../../styles/Home.css";
import SearchForm from "../components/SearchForm.jsx";

const Home = ()=>{
    return(<>
        <div className="container fluid">
            <div className="text-center mt-5 mb-3">
                <h1>Get your tickets to our solar train</h1>
                <h3>Connecting Paris to London</h3>
            </div>
            <div className="container fluid">
                <SearchForm />
                {/* <div className="position-absolute top-50 start-50 translate-middle mt-5 formulario mb-5 pb-3 pt-1">
                    <div className="d-flex flex-column justify-content-start align-items-center align-content-center mt-2 mb-2">
                        <div><DateIn />
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
                </div> */}
            </div>
        </div>
    </>);
};
export default Home;