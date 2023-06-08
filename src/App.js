import Routes from "./routes";
import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'
import { pinkTheme, defaultTheme } from './styles/themes'
import { useState } from "react";


function App() {

  const [themeIsDefault, setThemeIsDefault] = useState(true)
  return (
    <>
      <ThemeProvider theme={themeIsDefault ? defaultTheme : pinkTheme}>
      <GlobalStyle/>
      <Routes themeIsDefault={themeIsDefault} setThemeIsDefault={setThemeIsDefault}/>

      </ThemeProvider>
    </>
  );
}

export default App;
