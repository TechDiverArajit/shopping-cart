import { useEffect } from "react";
import { useCart } from "../Context/cart-counter";
const CartCard =({obj})=>{
    const {cart , cartDispatch} = useCart();
    const deleteItem = ()=>{
        cartDispatch({type:"REMOVE",payload: obj.id })
    }

    useEffect(()=>{
    localStorage.setItem("products",JSON.stringify(cart.cartProducts));
    },[cart.cartProducts])

    return(
        <>
        <div className="cartCard shadow-2xl mr-10 mt-10  ">
            <img src={obj.img} alt="" width={290} />
            <div>
            <h1 className="m-0">{obj.title}</h1>
            <h4 className="m-0">{obj.price}</h4>
            <div className="quantity">
                <h3>Quantity:</h3><input type="number" value={obj.quantity} />
            </div>
            
            <button onClick={()=>deleteItem()} className="border-2 rounded-xl text-md active:bg-indigo-100 hover:bg-gray-400">Delete</button>
            </div>
            
        </div>
        </>
    )
}
export default CartCard;