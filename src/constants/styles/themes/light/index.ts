import {DefaultTheme} from 'styled-components';
import * as Colors from '../colors';

export const light: DefaultTheme = {
  colors: {
    primary: {
      main: Colors.violet700,
      onMain: Colors.white,
    },
    secondary: {
      main: Colors.cyan800,
      onMain: Colors.white,
    },
    background: {
      main: Colors.white,
      onMain: Colors.black,
    },
    error: {
      main: Colors.red700,
      onMain: Colors.white,
    },
    surface: {
      main: Colors.gray300,
      onMain: Colors.white,
    },
  },
};
