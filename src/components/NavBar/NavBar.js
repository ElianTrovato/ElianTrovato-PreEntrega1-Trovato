import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from '../CartWidget/CartWidget';
import CartIcon from '../Img/iconApp.png'


function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <CartWidget icon= {CartIcon}/>
                    <NavLink class="navbar-brand" href="Ferreteria" to='/' className={({isActive})=> isActive? 'ActiveOption' : 'option'}>Ferretería</NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <NavLink to='/category/moladora' className={({isActive})=> isActive? 'ActiveOption' : 'option'}>Moladora</NavLink>
                        <NavLink to='/category/taladro' className={({isActive})=> isActive? 'ActiveOption' : 'option'}>Taladro</NavLink>
                        <NavLink to='/category/lija' className={({isActive})=> isActive? 'ActiveOption' : 'option'}>Lija</NavLink>
                        <NavLink to='/category/hidrolavadora' className={({isActive})=> isActive? 'ActiveOption' : 'option'}>Hidrolavadora</NavLink>
                    </div>
                    </div>
                </div>
            </nav>

        </div>
    );
  }
  
  export default NavBar;