import React from 'react'
import Dashboard from './containers/dashboard'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '@mui/styled-engine'
import { lightTheme, darkTheme } from './styles/theme'
const App = () => {
  return (
    <div>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <Dashboard />
      </ThemeProvider>
    </div>
  )
}

export default App