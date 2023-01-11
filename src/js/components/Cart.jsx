import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { FaShoppingCart } from "react-icons/fa";
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import TicketInCart from "./TicketInCart.jsx";



const Cart =()=>{
    const [anchorEl, setAnchorEl] = useState(null);
    const { store, actions } = useContext(Context);
    useEffect(()=>{
      actions.listTickets()
  },[])

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    

    
    const cartSize={
        width: 30+"px",
        height: 30+"px"
    }

  return (<>
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        <FaShoppingCart style={cartSize} />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >{store.cart.length>0 ? store.cart.map((ticket) => {
        return <div key={ticket.ticketId}>
          <TicketInCart
            origin={ticket.origin}
            destination={ticket.destination}
            departTime={ticket.departTime}
            arrival={ticket.arrival}
            ticketId={ticket.ticketId}
            passengers={ticket.passengers}

          />
        </div>
      }) : ""}
      <div className="d-flex justify-content-end m-1">
    <button type="button" className="btn btn-success" hidden={store.cart.length>0?false:true}>
      Checkout
    </button>
    </div>
      </Popover>
    </div>

  </>
  );
};

export default Cart;