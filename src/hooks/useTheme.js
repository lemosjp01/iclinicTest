import React, {
  createContext,
  useState,
  useContext,
} from 'react'

import { dark } from '../styles/theme'
  
export const ThemeContext = createContext({
  theme: dark
})
  
export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within an ThemeProvider')
  }
  
  return context
}
  
export const ThemeContextProvider = ({ children }) => {
  
  const [theme, setTheme] = useState({
    theme: dark
  })
  
  const setThemeValue = (value) => {
    setTheme({
      theme: value
    })
  }
   
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: setThemeValue
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
  