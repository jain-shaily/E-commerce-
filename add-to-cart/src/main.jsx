import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import CartProvider from './context/CartContext.jsx';
import ThemeContext from './context/ThemeContext.jsx'
import { AuthContext, AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
      <CartProvider>
        <ThemeContext>
          <AuthProvider>
               <App />
          </AuthProvider>
        </ThemeContext>
    </CartProvider>
  </BrowserRouter>
);
