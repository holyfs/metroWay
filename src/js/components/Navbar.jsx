import React, { useState } from "react";
import Cart from "./Cart.jsx";

const Navbar = () =>{
    const [ticketsInCart, setTicketsInCart] = useState([]);
    return(<>
        <nav className="navbar bg-primary text-white">
            <div className="container-fluid">
                <button className="navbar-brand" href="#">
                    <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="Logo" width="25" height="25" className="d-inline-block align-text-top" />
                </button>
                <div className="d-flex justify-center-end me-5">
                    <Cart />
                </div>
            </div>
        </nav>
    </>);
};
export default Navbar;