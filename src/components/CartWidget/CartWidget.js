import "./CartWidget.css"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import carrito from '../Img/carrito.png'

function CartWidget({icon}) {

    const { getTotalQuantity, isInCart } = useContext(CartContext)

    const totalQuantity = getTotalQuantity()

    return (
        <div className="DivCarro">
            <Link to='/carrito' className="CartWidget">
                <img src={carrito} alt='cart-widget' className='CartImg' />
                {totalQuantity}
            </Link>
        <img id="CarroImg" src={icon} />
        </div>

        
    );
  }
  
  export default CartWidget;