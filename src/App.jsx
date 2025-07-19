import { CartItems } from "./Pages/CartItems"
import Home from "./Home"
import { ProductInfo } from "./Pages/ProductInfo"
import { Route , Routes} from "react-router-dom"
function App() {
  
  


  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/CartItems" element={<CartItems/>}/>
        <Route path="/ProductInfo/:id" element={<ProductInfo/>}/>
      </Routes>
    
      
    </>
  )
}

export default App
