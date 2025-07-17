import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Cart/Cart.css'
import App from './App.jsx'
import { CartCountProvider } from './Context/cart-counter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartCountProvider>
      <App/>
    </CartCountProvider>
    
  </StrictMode>,
)
