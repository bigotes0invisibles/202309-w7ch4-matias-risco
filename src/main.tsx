import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import PerezosoProviderWrapper from "./features/perezosos/store/PerezosoProviderWrapper";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PerezosoProviderWrapper>
      <App />
    </PerezosoProviderWrapper>
  </React.StrictMode>,
);
