import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { CoffeeDeliveryProvider } from "./contexts/CoffeeDeliveryContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeDeliveryProvider>
          <Router />
        </CoffeeDeliveryProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
