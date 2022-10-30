
import { useState, useEffect, useRef } from "react"
import NavBar from "../NavBar/NavBar"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Cart from "../Cart/Cart"
import Checkout from "../Checkout/Checkout";

const Animation = () => {
    const [background, setBackground] = useState('rgb(250, 228, 168)')

    const divRef = useRef(10)

    useEffect(() => {
        const handleScroll = () => {
            const div = divRef.current

            const { y } = div.getBoundingClientRect()

            const backgroundColor = y <= 0 ? 'rgb(240, 215, 170)' : 'rgb(250, 228, 168)'

            setBackground(backgroundColor)

            return () => window.removeEventListener('scroll', handleScroll)
        }

        window.addEventListener('scroll', handleScroll)

    }, [])

    return (
        <div>
            <div id='scroll' 
                ref={divRef}
                style={{ height: '180vh', background: background}}>
                       <BrowserRouter>
                                <NavBar />
                                <Routes>
                                <Route path='/' element={<ItemListContainer greeting='Listado de todos los productos' />}/>
                                <Route path='/carrito' element={<button style={{display:"block", marginLeft:"auto", marginRight:"auto"}}>
                                    <Link to={"/"}>Seguir comprando</Link></button>}
                                />
                                <Route path='/category/:categoryId' element={<ItemListContainer greeting='Filtro:' />}/>
                                <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
                                <Route path="/carrito" element={<Cart />}/>
                                <Route path="/checkout" element={<Checkout />}/>
                                </Routes>
                        </BrowserRouter>
            </div>
        </div>
    )
}

export default Animation