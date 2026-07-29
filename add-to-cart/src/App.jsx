import React, { useContext } from 'react'

import AppRoutes from './routes/AppRoutes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { themehandler } from './context/ThemeContext'

const App = () => {
  const [theme,settheme] = useContext(themehandler)
  return (
    <div className={theme}>
     <Navbar />
     <AppRoutes />
     <Footer />
    </div>
  )
}

export default App
