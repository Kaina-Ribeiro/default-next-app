import '../styles/globals.css'
import {ThemeProvider} from 'styled-components';
import { darkTheme, theme } from '../themes/themes';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [currentTheme, setCurrentTheme] = useState("light");
  
  return (
    <ThemeProvider theme={currentTheme === "light" ? theme : darkTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
