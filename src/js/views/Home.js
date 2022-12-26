import React from "react";

import "../../styles/Home.css";
import SearchForm from "../components/SearchForm.jsx";

const Home = ()=>{
    return (<>
        <div className="home">
            <div className="row">
                <div className="col offset-1 mt-5">
                    <h1 className="text-danger">Get your tickets to our Solar Train</h1>
                    <h3 className="text-white">Connecting Paris to London</h3>
                </div>
            </div>
            <div className="row">
                <div className="col offset-1 mt-5">
                    <SearchForm />
                </div>
            </div>
        </div>
    </>);
};
export default Home;