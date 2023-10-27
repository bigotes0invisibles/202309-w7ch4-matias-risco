import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import PerezosoProviderWrapper from "./features/perezosos/store/PerezosoProviderWrapper";
import MainTheme from "./mainTheme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PerezosoProviderWrapper>
      <ThemeProvider theme={MainTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </PerezosoProviderWrapper>
  </React.StrictMode>,
);
