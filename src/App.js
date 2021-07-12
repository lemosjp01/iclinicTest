import React, { useCallback, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ThemeContext, ThemeContextProvider } from './hooks/useTheme'
import Routes from './routes/Routes'
import GlobalStyle from './styles/global'
import { dark } from './styles/theme'


const App = () => {
  const [currTheme, setTheme] = useState(dark)

  const toggleTheme = useCallback((value) => setTheme(value), [setTheme])

  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <ThemeContext.Consumer>
          {theme => (
            <ThemeProvider theme={currTheme}>
              <Routes toggleTheme={toggleTheme} />
            </ThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeContextProvider>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
