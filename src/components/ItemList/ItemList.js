import React from "react"
import { useState, useEffect } from "react"

const ItemList = () => {
    const [products, setProducts] = useState([])
    const [input, setInput] = useState('')
    
    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=herramientas-electricas')
            .then(response => {
                return response.json()
                }).then(res => {
                    setProducts(res.results.slice(0, 10))
                })
                .catch(error => {
                    console.log(error)
                })
        }, [])
    
        console.log(products)
    
        const handleSearch = () => {
            fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
                .then(response => {
                    return response.json()
                }).then(res => {
                    setProducts(res.results.slice(0, 10))
                })
                .catch(error => {
                    console.log(error)
                })
        }
    
        return (
            <div>
                <h1>Listado de Productos</h1>
                <input value={input} onChange={(e) => setInput(e.target.value)}/>
                <button onClick={handleSearch}>Buscar</button>
                {products.map(product => <div key={product.id}>
                        <img src={product.thumbnail} alt={product.title}/>
                        {product.title}
                        </div>)}
            </div>
        )
    }

export default ItemList