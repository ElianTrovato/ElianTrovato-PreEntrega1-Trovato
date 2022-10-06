import React from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"



const ItemListContainer = ( {MensajeProvisional}) => {

    
    return(
        <><h6 id="mensaje">{MensajeProvisional}</h6>
        <ItemList/>
        </>
    )

}

export default ItemListContainer;