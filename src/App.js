import './App.css';
import Animation from './components/Animation/Animation';
import { CartContextProvider } from './context/CartContext';


function App() {

  return (
    <div>
      <CartContextProvider>
        <Animation />
      </CartContextProvider>
      
    </div>
      
      
    
  );
}

export default App;
