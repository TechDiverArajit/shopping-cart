import { useEffect, useState } from "react"
import Shoes from "../CardComponents/Shoes";
import Products from "../DB/Products";
import CartCard from "../CardComponents/CartCard";
import { useCart } from "../Context/cart-counter";
import { useNavigate } from "react-router-dom";
import { Route , Routes } from "react-router-dom";

const Cart = ()=>{
    const[cartOpened , setCartOpened] = useState(false);
    const navigate = useNavigate();
    const cartPage =()=>{
        navigate("/CartItems")
    }

    const cartClicked = ()=>{
        setCartOpened(true);
    }

    const {cart} = useCart();

    const total = cart.cartProducts.reduce((acc,curr)=>{
        return curr.quantity>1? acc+curr.price*curr.quantity:acc+curr.price;
    },0)

    useEffect(()=>{
        localStorage.setItem("products",JSON.stringify(cart.cartProducts));
    },[cart.cartProducts])

    return (
        <>
        <div onClick={cartClicked} className="cart">
            <img  src="/src/assets/parcel.png" width={40} alt="" />
            <h1 className="text-3xl">{cart.cartProducts.length}</h1>
        </div>

        <div className="sidebar flex flex-col overflow-y-auto pb-20" style={cartOpened?{width:"300px"}:{width:"0"}}>
            <span onClick={()=>setCartOpened(false)}>X</span>
            {cart.cartProducts.map((item ,id) =>
            <li key={id}>
                <CartCard obj={item}  />
            </li>
                
            )}
            <div className="total h-18 overflow-x-hidden fixed bottom-0 bg-gray-300 z-3 w-[300px] ">
                <h1 className="pl-4 font-bold">Total:₹{total} </h1>
                <button onClick={cartPage} className="w-[280px] shadow-2xl bg-amber-200 mx-1 my-0 absolute bottom-2 rounded-lg hover:bg-amber-100">Go to cart</button>
            </div>
        </div>
        
        </>
    )
}
export default Cart