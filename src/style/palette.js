import {createTheme} from '@mui/material'

export const light = createTheme({
  palette: {
    mode: 'light',
    dark: {
      main: "#242424",
      light: "#606060",
      dark: "#101010",
      darker: "#000",
    },
    light: {
      main: "#fff",
      light: "rgba(0,0,0,0.2)"
    },
    
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true
      }
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Roboto", "Arial", sans-serif',
        },
        body1: {
          fontSize: "1.4rem",
        },
        videoTitle1: {

        },
        videoTitle2: {
          fontWeight: "500",
          fontSize: "1.4rem",
          lineHeight: "2rem",
          maxHeight: "4rem",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "normal",
        },
        videoSubtitle: {
          fontWeight: "400",
          fontSize: "1.2rem",
          lineHeight: "2rem",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "normal",
        }
      },
      defaultProps: {
        sx: {fontSize: {xl:"1.6rem" } }
      }
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
      defaultProps: {
        elevation: 0
      }
    },

    MuiCardActionArea: {
      defaultProps: {
        disableRipple: true
      }
    },

    MuiListItemButton: {
      defaultProps: {
        disableRipple: true
      }
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          borderTopLeftRadius: 2,
          borderBottomLeftRadius: 2,
        },
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          borderTopLeftRadius: 2,
          borderBottomLeftRadius: 2,
        },
      }
    },

    
    // --root
  },
});
export const dark = createTheme({
  palette: {
    mode: 'dark',
  }
});