import { DefaultTheme } from "styled-components";
import { colors, darkColors } from './colors';

const theme: DefaultTheme = {
  colors,
  
  fontFamily: {
    primary: "roboto",
    secondary: "serif",
  }
};

const darkTheme: DefaultTheme = {
  colors: darkColors,
}; 

export { theme, darkTheme };
