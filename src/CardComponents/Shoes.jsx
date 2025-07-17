import { useReducer } from "react"
import Products from "../DB/Products"
import Cart from "../Cart/Cart"
import { useCart } from "../Context/cart-counter"

const Shoes = ({obj})=>{

    const {cartDispatch} = useCart();

    const add =()=>{
        cartDispatch({type:"ADD", payload: obj})
    }
    
    
    return(
        <>
        
        
        <div className="card">
            <img className="shoe-img" src={obj.img} alt="" />
            <div className="info">
                <h1>{obj.title}</h1>
                <h4>MRP:₹{obj.price} </h4>
               <button onClick={add}><img src="./src/assets/parcel.png" alt="" /></button>
            </div>
            
        </div>
        </>
    )
}
export default Shoes