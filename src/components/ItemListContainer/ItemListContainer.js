import React from "react";
import "./ItemListContainer.css"



const ItemListContainer = ( {MensajeProvisional, Producto, Price }) => {

    
    return(
        <><h1 id="mensaje">{MensajeProvisional}</h1>
           <div class="row row-cols-1 row-cols-md-2 g-4" style={{marginLeft: 350, marginTop: 100}}>
                <div class="col column">
                    <div class="card">
                    <img style={{height: 350}} src="https://www.ecured.cu/images/c/c2/Bosch-gks-65-sierra-circular-gks65.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{Producto}</h5>
                        <p class="card-text">{Price}</p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ItemListContainer;