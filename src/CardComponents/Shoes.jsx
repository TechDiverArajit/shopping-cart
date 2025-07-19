import { useReducer } from "react"

import Cart from "../Cart/Cart"
import { useCart } from "../Context/cart-counter"
import { useNavigate } from 'react-router-dom';

const Shoes = ({obj})=>{
    const navigate = useNavigate();
    const {cartDispatch} = useCart();

    const add =()=>{
        cartDispatch({type:"ADD", payload: obj})
    }

    const productPage = ()=>{
    navigate(`/ProductInfo/${obj.id}`)
  }
    
    
    return(
        <>
        
        
        <div className="card">
            <div onClick={productPage}>
            <img className="shoe-img" src={obj.img} alt="" />
            <div className="info">
                <h1>{obj.title}</h1>
                <h4>MRP:₹{obj.price} </h4>
               
            </div>
            </div>
            <button  className="ml-5" onClick={add}><img src="./src/assets/parcel.png" alt="" /></button>
        </div>
        </>
    )
}
export default Shoes