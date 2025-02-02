import React, {
  Dispatch,
  SetStateAction,
  Suspense,
  useEffect,
  useState,
} from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import Header from "./components/page/Header";
import DashboardRoute from "./routes/DashboardRoute";
import { ItemAuthoringRoute } from "./routes/projects/item-authoring/ItemAuthoringRoute";
import { themes } from "./theme";
import { parseJson } from "./util";

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
.ck-powered-by-balloon {
  display: none !important;
}
`;

export const FlexBox = styled.div`
  display: flex;
`;

export type SessionContextState = {
  username: string;
  password: string;
  developerKey: string;
  developerSecret: string;
  firstName: string;
  lastName: string;
  email: string;
  domain: string;
};

const getSessionStateFromEnv = (): SessionContextState => {
  return {
    username: import.meta.env.VITE_EXAMSPARK_SDK_USERNAME ?? "",
    password: import.meta.env.VITE_EXAMSPARK_SDK_PASSWORD ?? "",
    developerKey: import.meta.env.VITE_EXAMSPARK_SDK_CONSUMER_KEY ?? "",
    developerSecret: import.meta.env.VITE_EXAMSPARK_SDK_SECRET ?? "",
    domain: import.meta.env.VITE_EXAMSPARK_SDK_DOMAIN ?? "",
    email: import.meta.env.VITE_EXAMSPARK_SDK_USER_EMAIL ?? "",
    firstName: import.meta.env.VITE_EXAMSPARK_SDK_USER_FIRST_NAME ?? "",
    lastName: import.meta.env.VITE_EXAMSPARK_SDK_USER_LAST_NAME ?? "",
  };
};

/**
 * Load session with the following priority:
 * - (1) from env file if key and secret are present
 * - (2) from local storage
 * - (3) useless default with no key or secret
 */
const initialContext: SessionContextState =
  import.meta.env.VITE_EXAMSPARK_SDK_CONSUMER_KEY &&
  import.meta.env.VITE_EXAMSPARK_SDK_SECRET
    ? getSessionStateFromEnv()
    : (parseJson<SessionContextState>(localStorage.getItem("session")) ??
      getSessionStateFromEnv());

export const SessionContext = React.createContext<
  [
    SessionContextState,
    React.Dispatch<React.SetStateAction<SessionContextState>>,
  ]
>([
  initialContext,
  () => {
    console.error(
      `No dispatch method provided; are you using SessionContext outside of a provider?`,
    );
  },
]);

export const ApplicationContext = React.createContext<
  [string, Dispatch<SetStateAction<string>>]
>(["light", () => {}]);

function App() {
  const [theme, setTheme] = useState("light");
  const themeObject = themes[theme as keyof typeof themes];
  const [session, setSession] = useState<SessionContextState>(initialContext);

  useEffect(() => {
    localStorage.setItem("session", JSON.stringify(session));
  }, [session]);

  return (
    <SessionContext.Provider value={[session, setSession]}>
      <ApplicationContext.Provider value={[theme, setTheme]}>
        <ThemeProvider theme={themeObject}></ThemeProvider>
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
      </ApplicationContext.Provider>
    </SessionContext.Provider>
  );
}

export default App;
