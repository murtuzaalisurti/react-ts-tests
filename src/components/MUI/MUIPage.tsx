import React from 'react'
import { TthemeState } from '../../context/themeContext'
import { Box, Button, Container } from '@mui/material'
import StyledButton from './styled/Button'
import Cards from './Cards/Cards'

interface MUIPageProps {
    themeMode: TthemeState,
    setThemeMode: (value: React.SetStateAction<TthemeState>) => void
}

const MUIPage = ({ themeMode, setThemeMode }: MUIPageProps) => {
    return (
        <Container sx={{
            p: 10
        }}>
            <Box sx={{
              mb: 2
            }}>
              <Button variant="contained" onClick={() => {
                setThemeMode(prev => {
                  return prev === "light" ? "dark" : "light"
                })
              }}>Change Theme {themeMode}
              </Button>
              <StyledButton variant="contained">Styled Button</StyledButton>
            </Box>
            <Cards />
        </Container>
    )
}

export default MUIPage