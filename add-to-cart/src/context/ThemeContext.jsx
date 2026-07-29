import React, { createContext, useState } from 'react'
export const themehandler = createContext()
const ThemeContext = ({children}) => {
  const [theme, settheme] = useState('light')

  return (
   
      <themehandler.Provider value={[theme,settheme]}>
        {children}
      </themehandler.Provider>
   
  )
}

export default ThemeContext