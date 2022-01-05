import {createTheme} from '@mui/material'

export const light = createTheme({
  palette: {
    mode: 'light',
    dark: {
      main: "#242424",
      light: "#808080",
      dark: "#101010"
    },
    light: {
      main: "#fff"
    }

  }
});
export const dark = createTheme({
  palette: {
    mode: 'dark',
  }
});