import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5367FF',
    },
    secondary: {
      main: '#E0E0E0',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4.5,
        }
      }, 
    }, 
  }
});

export default theme;