import React from "react";
import "./CartWidget.css"


function CartWidget({icon}) {
    return (
        <img id="CarroImg" src={icon} />
    );
  }
  
  export default CartWidget;