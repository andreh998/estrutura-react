import { createTheme } from "@mui/material";

const commonColors = {
  primary: {
    main: '#1565C0',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#00ACC1',
    contrastText: '#FFFFFF',
  },
  warning: {
    main: '#F44336',     // Vermelho médio, forte mas equilibrado
    light: '#FFCDD2',    // Vermelho clarinho
    contrastText: '#FFFFFF',
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      ...commonColors.primary,
      light: '#E3F2FD',
    },
    secondary: {
      ...commonColors.secondary,
      light: '#B2EBF2',
    },
    warning: {
      ...commonColors.warning,
    },
    background: {
      default: '#F4F6F8',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#212121',
      secondary: '#616161',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      ...commonColors.primary,
      main: '#42A5F5', // Azul mais claro e vibrante para dark
      light: '#90CAF9',
    },
    secondary: {
      ...commonColors.secondary,
      light: '#80DEEA',
    },
    warning: {
      ...commonColors.warning,
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#BDBDBD',
    },
  },
});
