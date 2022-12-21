import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Cart =()=>{
    const cartSize={
        width: 30+"px",
        height: 30+"px"
    }
    return(<>
    <FaShoppingCart icon="fa-light fa-cart-shopping"  style={cartSize}/>
    </>
    );
};

export default Cart;