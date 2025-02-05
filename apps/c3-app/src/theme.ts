export const theme = {
  name: "light",
  surface0: "#fff",
  surface1: "hsl(0, 0%, 98%)",
  surface2: "hsl(0, 0%, 96%)",
  surface3: "hsl(0, 0%, 93%)",
  surface4: "hsl(0, 0%, 90%)",
  surface5: "hsl(0, 0%, 87%)",
  surfaceBorder: "hsl(0, 0%, 68%)",
  backgroundColor: "white",
  textColor: "hsl(0, 0%, 10%)",
  textColor1: "hsl(0, 0%, 0%)",
  textColor2: "hsl(0, 0%, 15%)",
  textColor3: "hsl(0, 0%, 30%)",
  textColor4: "hsl(0, 0%, 45%)",
  textColor5: "hsl(0, 0%, 60%)",
  textColorContrast: "#ddd",
  inputBorderColor: "#ccc",
  inputBorderRadius: "0.5rem",
  inputBackgroundColor: "#fff",
  linkColor: "rebeccapurple",
  intentNone: "#ddd",
  intentNoneFontColor: "#222",
  intentDanger: "#aa4d4d",
  intentPrimary: "#237ba6",
  intentSuccess: "#577f57",
  intentWarning: "#ffa500",
  intentCreate: "#577f57",
  black: "#222",
  white: "#fff",
  h1Color: "#222",
  h2Color: "#222",
  h3Color: "#222",
  h4Color: "#222",
  h5Color: "#222",
};

export type Theme = typeof theme;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Theme {}
}
