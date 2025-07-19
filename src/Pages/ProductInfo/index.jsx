import { useParams } from "react-router-dom"
import Products from "../../DB/Products"
import Shoes from "../../CardComponents/Shoes";
import Cart from "../../Cart/Cart";
import { useCart } from "../../Context/cart-counter";
import { use } from "react";
export const ProductInfo = ()=>{
    const param = useParams();
    const shoe = Products.find(({id})=> param.id==id);

    const {cart,cartDispatch}=useCart();

    const add = ()=>{
        cartDispatch({type:"ADD",payload:shoe})
    }

    return(
        <>

        

        <Cart/>
        <div className="flex justify-center items-center gap-5">
        <div className="flex flex-col justify-center items-center">
            
            {console.log(shoe.bigImg)}
            <div>
            <img className="w-140 my-5  rounded-2xl shadow-2xl" src={shoe.bigImg}  alt="" />
            <h1 className="font-sans">
                MRP : ₹ {shoe.price}<br />
                Inclusive of all taxes <br />
                (Also includes all applicable duties)
            </h1>
            </div>
            <div className="flex flex-col gap-2">
                <button onClick={add} className="bg-black font-sans w-[250px] h-8 rounded-2xl text-white">ADD TO BAG</button>
                <button className="bg-white font-sans w-[250px] h-8 rounded-2xl text-black border-2">FAVOURITE</button>

            </div>
            
        </div>
        <div className="pb-[360px]">
            <h1 className="text-4xl font-sans font-bold">{shoe.title}</h1>
            <p className="font-sans">
                {`A flash from the past meets modern times. The ${shoe.title} `} <br />
                Next Nature is made from at least 20% recycled content by weight. <br /> We intentionally replaced high-impact leather with synthetic leather for a <br /> crisp look that's smooth and is easy to wear. The large,<br /> retro Swoosh adds throwback appeal.


Colour Shown: White/Black <br />
Style: DH3160-101 <br />
Country/Region of Origin: Indonesia, Vietnam <br />
            </p>
        </div>
        </div>
        
        </>
    )
}