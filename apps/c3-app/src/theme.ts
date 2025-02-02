import { z } from "zod";

export const defaultThemeSchema = z.object({
  name: z.string(),
  surface0: z.string(),
  surface1: z.string(),
  surface2: z.string(),
  surface3: z.string(),
  surface4: z.string(),
  surface5: z.string(),
  surfaceBorder3: z.string(),
  backgroundColor: z.string(),
  textColor: z.string(),
  textColor1: z.string(),
  textColor2: z.string(),
  textColor3: z.string(),
  textColor4: z.string(),
  textColor5: z.string(),
  textColorContrast: z.string(),
  inputBorderColor: z.string(),
  inputBorderRadius: z.string(),
  inputBackgroundColor: z.string(),
  linkColor: z.string(),
  intentNone: z.string(),
  intentNoneFontColor: z.string(),
  intentDanger: z.string(),
  intentPrimary: z.string(),
  intentSuccess: z.string(),
  intentWarning: z.string(),
  intentCreate: z.string(),
  black: z.string(),
  white: z.string(),
  h1Color: z.string(),
  h2Color: z.string(),
  h3Color: z.string(),
  h4Color: z.string(),
  h5Color: z.string(),
});

export type DefaultCommonTheme = z.infer<typeof defaultThemeSchema>;

export const colors = {
  lightGray1: "hsl(0, 0%, 98%)",
  lightGray2: "hsl(0, 0%, 96%)",
  lightGray3: "hsl(0, 0%, 93%)",
  lightGray4: "hsl(0, 0%, 90%)",
  lightGray5: "hsl(0, 0%, 87%)",
  darkGray5: "hsl(212, 15%, 32%)",
  darkGray4: "hsl(212, 15%, 27%)",
  darkGray3: "hsl(212, 15%, 22%)",
  darkGray2: "hsl(212, 15%, 17%)",
  darkGray1: "hsl(212, 15%, 12%)",
  blue5: "hsl(200, 65%, 50%)",
  blue4: "hsl(200, 65%, 45%)",
  blue3: "hsl(200, 65%, 40%)",
  blue2: "hsl(200, 65%, 35%)",
  blue1: "hsl(200, 65%, 30%)",
  warm: "hsl(68.6, 100%, 97.3%)",
  cool: "hsl(240 33% 95%)",
};

export const themes: Record<string, DefaultCommonTheme> = {
  light: {
    name: "light",
    surface0: "#fff",
    surface1: colors.lightGray1,
    surface2: colors.lightGray2,
    surface3: colors.lightGray3,
    surface4: colors.lightGray4,
    surface5: colors.lightGray5,
    surfaceBorder3: "hsl(0, 0%, 68%)",
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
  },
  dark: {
    name: "dark",
    surface0: colors.darkGray1,
    surface1: colors.darkGray1,
    surface2: colors.darkGray2,
    surface3: colors.darkGray3,
    surface4: colors.darkGray4,
    surface5: colors.darkGray5,
    surfaceBorder3: "hsl(0, 0%, 20%)",
    backgroundColor: colors.darkGray1,
    textColor: "hsl(220, 20%, 95%)",
    textColor1: "hsl(220, 20%, 95%)",
    textColor2: "hsl(220, 20%, 85%)",
    textColor3: "hsl(220, 20%, 75%)",
    textColor4: "hsl(220, 20%, 65%)",
    textColor5: "hsl(220, 20%, 55%)",
    textColorContrast: "#222",
    inputBackgroundColor: "#16181b",
    inputBorderColor: "#444",
    inputBorderRadius: "0.5rem",
    linkColor: "#ccaee9",
    intentNone: "#404a55",
    intentNoneFontColor: "#fff",
    intentDanger: "#aa4d4d",
    intentPrimary: "#237ba6",
    intentSuccess: "#577f57",
    intentWarning: "orange",
    intentCreate: "#577f57",
    black: "#222",
    white: "#fff",
    h1Color: "#fff",
    h2Color: "#fff",
    h3Color: "#fff",
    h4Color: "#fff",
    h5Color: "#fff",
  },
};
