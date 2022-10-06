import React from "react"
import { useState } from "react"

const Counter = ({ children, render }) => {

const inicial = 5
const [count, setCount] = useState(inicial)
const decrement = () => {
    if(count > 0){
        setCount(count - 1)
    }
}
const increment = () => {
        setCount(count + 1)
}
const reset = () => {
        setCount(inicial)
}

return (
    <div>
        {children}
        <h1>{count}</h1>
        <button onClick={decrement}>Restar</button>
        <button onClick={increment}>Sumar</button>
        <button onClick={reset}>Reset</button>
        {render}
    </div>
)

}

export default Counter