// src/styles/theme.js
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: false,
    },
    MuiFilledInput: {
      color: 'secondary',
    },
  },
  palette: {
    primary: {
      main: '#1976d2',
      contrastText: '#ffffff',
      light: '#4791db',
      dark: '#115293',
    },
    secondary: {
      main: '#dc004e',
      light: '#e33371',
      dark: '#9a0036',
    },
    error: {
      main: '#FF2E2E',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: [
      'Noto Sans JP',
      'Hiragino Kaku Gothic Pro',
      'ヒラギノ角ゴ Pro',
      'Yu Gothic Medium',
      '游ゴシック Medium',
      'YuGothic',
      '游ゴシック体',
      'メイリオ',
      'sans-serif',
    ].join(','),
  },
});
