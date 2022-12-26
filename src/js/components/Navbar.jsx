import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import Cart from "./Cart.jsx";
import { TbTrain } from "react-icons/tb";

const Navbar = () =>{
    const navigate = useNavigate();
    const [ticketsInCart, setTicketsInCart] = useState([]);
    const cartSize={
        width: 40+"px",
        height: 40+"px"
    }
    const goTo=()=>{
        navigate(-1);
    }
    return(<>
        <nav className="navbar bg-primary text-white">
            <div className="container-fluid">
                <div className="text-white ms-2" onClick={()=>goTo()} >
                    <TbTrain style={cartSize}/> <strong className="p-2 navbar-brand text-white">Metroway</strong>
                </div>
                <div className="d-flex justify-center-end me-5">
                    <Cart />
                </div>
            </div>
        </nav>
    </>);
};
export default Navbar;