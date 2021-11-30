import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import {
  Backdrop,
  CircularProgress,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from '@mui/material'
import { useTheme } from './hooks/redux'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

const App = () => {
  const themeValue = useTheme()
  let mainColor = themeValue.theme.mainColor
  let secondColor = themeValue.theme.secondColor
  let themeMode = themeValue.theme.mode

  const themeCustom = createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: mainColor,
      },
      secondary: {
        main: secondColor,
      },
      background: {
        default: themeMode === 'light' ? '#fff' : '#0A1929',
        paper: themeMode === 'light' ? '#fff' : '#0A1929',
      },
      text: {
        primary: themeMode === 'light' ? '#20262D' : '#fff',
        disabled: '#7F8E9D'
      }
    }
  })

  const Loading = () => {
    return (
      <Backdrop
        open={true}
      >
        <CssBaseline />
        <CircularProgress color="inherit" />
      </Backdrop>
    )
  }

  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={themeCustom}>
        <>
          <CssBaseline />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      </ThemeProvider>
    </Suspense>
  )
}

export default App
