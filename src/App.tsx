import { useState, useContext, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom';
import Greet from './components/Greet/Greet';
import Counter from './components/Counter/Counter';
import StarWars from './components/StarWars/StarWars';
import Home from './components/Home/Home';

import { Box, Button, Container, CssBaseline, Grid, Theme, createTheme, useMediaQuery } from '@mui/material'

// theme context react
import themeContext from './context/themeContext'

// theme - MUI
import { ThemeProvider } from '@mui/material'
import { customThemeObj } from './theme/custom'
import MUIPage from './components/MUI/MUIPage';

function App() {
  const themeContextUse = useContext(themeContext)
  const [themeMode, setThemeMode] = useState(themeContextUse.themeMode)

  const theme = useMemo(() => createTheme(customThemeObj(themeMode)), [themeMode])

  return (
    <themeContext.Provider value={{themeMode, setThemeMode}}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/greet' element={<Greet name='there' message='how are you?' />} />
            <Route path='/count' element={<Counter initialState={0} />} />
            <Route path='/api' element={<StarWars />} />
            <Route path='/mui' element={<MUIPage themeMode={themeMode} setThemeMode={setThemeMode} />} />
          </Routes>
        </CssBaseline>
      </ThemeProvider>
    </themeContext.Provider>
  );
}

export default App;
