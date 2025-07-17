import { useState } from "react";
import { createContext } from "react";
import { cartReducer } from "./cartReducer";
import { useReducer } from "react";
import { useContext } from "react";


const cartCounter = createContext();

const CartCountProvider = ({children})=>{

 const initialState = {
        cartProducts:[],
    }

    const[cart , cartDispatch] = useReducer(cartReducer,initialState);

    return (
      <cartCounter.Provider value={{cart , cartDispatch}}>
        {children}
      </cartCounter.Provider>  
    )
}

const useCart = ()=> useContext(cartCounter);
export {useCart , CartCountProvider};