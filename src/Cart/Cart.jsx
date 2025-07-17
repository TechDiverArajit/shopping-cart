import { useState } from "react"
import Shoes from "../CardComponents/Shoes";
import Products from "../DB/Products";
import CartCard from "../CardComponents/CartCard";
import { useCart } from "../Context/cart-counter";

const Cart = ()=>{
    const[cartOpened , setCartOpened] = useState(false);

    const cartClicked = ()=>{
        setCartOpened(true);
    }

    const {cart} = useCart();




    return (
        <>
        <div onClick={cartClicked} className="cart">
            <img  src="./src/assets/parcel.png" width={40} alt="" />
            <h1 className="text-3xl">{cart.cartProducts.length}</h1>
        </div>

        <div className="sidebar flex flex-col overflow-y-auto mb-10" style={cartOpened?{display:"flex"}:{display:"none"}}>
            <span onClick={()=>setCartOpened(false)}>X</span>
            {cart.cartProducts.map((item ,id) =>
            <li key={id}>
                <CartCard obj={item}  />
            </li>
                
            )}
        </div>
        </>
    )
}
export default Cart