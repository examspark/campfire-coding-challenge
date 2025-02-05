import { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import Header from "./components/page/Header";
import DashboardRoute from "./routes/DashboardRoute";
import { ItemAuthoringRoute } from "./routes/projects/item-authoring/ItemAuthoringRoute";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
html {
  background-color: ${(props) => props.theme?.backgroundColor ?? "#fff"};
  transition: color 0.2s, background-color 0.2s;
}
body {
  color: ${(props) => props.theme?.textColor ?? "#000"};
  transition: color 0.2s, background-color 0.2s;
}
a {
  color: ${(props) => props.theme?.linkColor ?? "#306b88"};
  transition: color 0.2s;
}
`;

export const FlexBox = styled.div`
  display: flex;
`;

function App() {
  return (
    <>
      <ThemeProvider theme={theme}></ThemeProvider>
      <GlobalStyle />
      <Router
        future={{
          v7_relativeSplatPath: true,
        }}
      >
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <div id="app">
            <Routes>
              <Route
                path="/projects/item-authoring"
                element={
                  <>
                    <ItemAuthoringRoute />
                  </>
                }
              />
              <Route
                index
                element={
                  <>
                    <DashboardRoute />
                  </>
                }
              />
            </Routes>
          </div>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
