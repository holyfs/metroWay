import React from "react";
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
                <div className="position-absolute top-50 start-50 translate-middle mt-5 formulario">
                    <div className="d-flex flex-column justify-content-start align-items-center align-content-center">
                    <div className="mt-2">Ida</div>
                    <div className="mt-2">Vuelta</div>
                    </div>
                </div>
            </div>
        </div>
    </>);
};
export default Home;