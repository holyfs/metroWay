import React from "react";

const Navbar = () =>{
    return(<>
        <nav className="navbar bg-primary text-white">
            <div className="container-fluid">
                <button className="navbar-brand" href="#">
                    <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="Logo" width="25" height="25" class="d-inline-block align-text-top" />
                </button>
                <div className="d-flex justify-center-end">
                    <span>Login/SingUp</span>
                </div>
            </div>
        </nav>
    </>);
};
export default Navbar;