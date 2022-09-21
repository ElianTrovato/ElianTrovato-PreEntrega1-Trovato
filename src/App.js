import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'

function App() {
  return (
    
      <><NavBar />
        <ItemListContainer MensajeProvisional="Aguarde un momento, aquí aparecerá nuestro catalogo"/> 
        <ItemListContainer Producto="Sierra" Price="$ 15.000" /> 
        <ItemListContainer Producto="Moladora" Price="$ 25.000" /> 
        <ItemListContainer Producto="Taladro" Price="$ 35.000" /> 
      
      </>
    
  );
}

export default App;
