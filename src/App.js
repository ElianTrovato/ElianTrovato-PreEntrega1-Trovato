import { useState } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route exact path="/" element={<ItemListContainer MensajeProvisional='Nuestro catálogo'/>} />
        <Route exact path="/category/:categoryId" element={<ItemListContainer MensajeProvisional='Productos Filtrados'/>} />
        <Route exact path="/detail/:productId" element={<ItemDetailContainer/>} />
        <Route exact path="/" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
      
      
    
  );
}

export default App;
