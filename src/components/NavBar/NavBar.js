import React from "react";
import CartWidget from '../CartWidget/CartWidget';
import CartIcon from '../Img/iconApp.png'

function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <CartWidget icon= {CartIcon}/>
                    <a class="navbar-brand" href="#">Ferreteria</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                        <a class="nav-link" href="#">Productos</a>
                        <a class="nav-link" href="#">Nosotros</a>
                        <a class="nav-link" href="#">Contacto</a>
                    </div>
                    </div>
                </div>
            </nav>

        </div>
    );
  }
  
  export default NavBar;