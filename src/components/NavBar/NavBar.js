import React from "react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import CartWidget from '../CartWidget/CartWidget';
import "./Navbar.css"
import iconApp from "../Img/iconApp.png"
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../../services/firebase'

const NavBar = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const collectionRef = query(collection(db, 'categories'), orderBy('order'))

    getDocs(collectionRef).then(response => {
      console.log(response)

      const categoriesAdapted = response.docs.map(doc => {
        const data = doc.data()
        return { id: doc.id, ...data}
      })

      setCategories(categoriesAdapted)
    })
  }, [])

  console.log(categories)

  return (
      <nav className="NavBar" >
          <div className='subNavBar'>
          <CartWidget className="img" icon={iconApp} />
            <Link to='/' style={{color: "black", textDecoration: "none"}}>
              <h3 className="titulo">Ecommerce Ferreteria</h3>
            </Link>
          </div>
          <div className="Categories">
              <button className="boton"><NavLink to='/category/herramientas Industriales' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} style={{color: "black", textDecoration: "none"}}>Herramientas Industriales</NavLink></button>
              <button className="boton"><NavLink to='/category/herramientas Electricas' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} style={{color: "black", textDecoration: "none"}}>Herramientas Electricas</NavLink></button>
          </div>
      </nav>

  )
}
  export default NavBar;