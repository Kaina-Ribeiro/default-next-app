// import original module declarations
import "styled-components";

// fazer o type do tema que for usar
// ajuda na experiencia de desenvolvimento

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: { 
      main: string;
      secondary: string;
    },
    fontFamily?: { 
      primary: "roboto";
      secondary: "serif";
    } 
  }
}

