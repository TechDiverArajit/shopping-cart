import Shoes from "../../CardComponents/Shoes";
import { useCart } from "../../Context/cart-counter"
export const CartItems =()=>{
    const {cart} = useCart();
    return(
        <>
        <h1 >
            You Have <span>{cart.cartProducts.length} items</span>
        </h1>

        {cart.cartProducts.map(item=>
            <Shoes obj={item}/>
        )}

        </>
    )
}