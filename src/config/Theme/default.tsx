import { createTheme } from '@mui/material/styles';

const themeDefault = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#e16e0e'
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#2b385b'
      // dark: will be calculated from palette.secondary.main,
    },

    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px'
          //coloca todas as estilizações aqui
        }
      }
    }
  }
});
export default themeDefault;
