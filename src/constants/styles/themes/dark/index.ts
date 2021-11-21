import {DefaultTheme} from 'styled-components';
import * as Colors from '../colors';

export const dark: DefaultTheme = {
  colors: {
    primary: {
      main: Colors.violet500,
      onMain: Colors.white,
    },
    secondary: {
      main: Colors.cyan500,
      onMain: Colors.white,
    },
    background: {
      main: Colors.black,
      onMain: Colors.white,
    },
    error: {
      main: Colors.red700,
      onMain: Colors.white,
    },
    surface: {
      main: Colors.white,
      onMain: Colors.gray300,
    },
  },
};
