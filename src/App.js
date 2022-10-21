import React from 'react'
import Dashboard from './containers/dashboard'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '@mui/styled-engine'

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <GlobalStyles />
        <Dashboard />
      </ThemeProvider>
    </div>
  )
}

export default App