import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#4fdee5',
    },
    tercero: {
      main: '#1c2833',
    },
    cuarto: {
      main: '#FB7E27',
    },
    error: {
      main: red.A400,
    },
  },
});

