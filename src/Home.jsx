import { useState } from 'react'
import Compo1 from './Components/Compo1';
import Shoes from './CardComponents/Shoes';
import Filter from './Filter';
import Products from './DB/Products';
import { useReducer } from 'react';
import Cart from './Cart/Cart';
import { useDarkTheme } from './Context/theme-context';
import { Route , Routes } from "react-router-dom";

function Home() {
  
  const initialState = {
    under8k:false,
    under12k:false,
    above13k:false
  }

  

  

  const Reducer =(state,action)=>{
    switch(action.type){
      case '8k':
        return{
          ...state,
          under8k:!state.under8k
        }
      case '12k':
        return {...state,under12k:!state.under12k}
      case '13k':
        return {...state, above13k:!state.above13k};

    }
  }
  const[filter , filterDispatch] = useReducer(Reducer , initialState);
  const filteredProducts = Products.filter((item)=>{
    if(filter.under8k && item.price<=8000) return true;
    if(filter.under12k && item.price<=12000) return true;
    if(filter.above13k && item.price>=13000) return true;
    if(!filter.under8k && !filter.under12k && !filter.above13k) return true;
    return false;
  })
  
  const {Theme , toggleTheme} = useDarkTheme();


  return (
    <>
    <button className="w-30 rounded-3xl border-3 absolute right-40 top-6">Favourites</button>
    <div className={Theme}>
    <button onClick={toggleTheme} className='w-[150px] h-10 bg-amber-100 shadow-2xl rounded-2xl font-bold border-5'>Light</button>
    <h1>Filter</h1>
        <div>
            <label htmlFor="">
            <input  type="checkbox" onChange={()=>filterDispatch({type:"8k"})} value="8000" checked={filter.under8k}/>
            Under ₹8000
        </label>
        <label htmlFor="">
            <input  id="" type="checkbox" onChange={()=>filterDispatch({type:'12k'})} checked={filter.under12k} value="12000" />
            Under ₹12,000
        </label>
        <label htmlFor="">
            <input type="checkbox" name="above13" onChange={()=>filterDispatch({type:"13k"})} checked={filter.above13k} value="13000" />
            above ₹13,000
        </label>
        </div>
        <Cart />
    <div  className='container'>
      {filteredProducts.map(item=>
        <Shoes key={item.id} obj={item} />
      )}
      
    </div>
    </div>
      
    </>
  )
}

export default Home