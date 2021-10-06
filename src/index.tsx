import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import Layout from './Layout'

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Layout />
  </ThemeProvider>,

  document.getElementById('root'),
)
