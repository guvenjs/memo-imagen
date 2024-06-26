import type { ExtendedTheme } from "@react-navigation/native";
import { DefaultTheme } from "@react-navigation/native";

export const palette = {
  primary: "#3F2305",
  primaryDark: "#3E3232",
  primaryLight: "#A87C7C",
  secondary: "#F2EAD3",
  secondaryDark: "#F0F0F0",
  secondaryLight: "#FCF5ED",
  background: "#f6f8fa",
  white: "#F5F5F5",
  black: "#101214",
  button: "#1c1e21",
  shadow: "#757575",
  text: "#030303",
  borderColor: "#d0d7de",
  borderColorDark: "#333942",
  placeholder: "#a1a1a1",
  danger: "rgb(208, 2, 27)",
  title: "rgb(102, 102, 102)",
  separator: "rgb(194, 194, 195)",
  highlight: "rgb(199, 198, 203)",
  blackOverlay: "rgba(0,0,0,0.6)",
  iconWhite: "#fff",
  iconBlack: "#101214",
  dynamicWhite: "#fff",
  dynamicBlack: "#1c1e21",
  dynamicBackground: "#fff",
  transparent: "transparent",
  calpyse: "#2b7488",
};

export const LightTheme: ExtendedTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    ...palette,
  },
};

export const DarkTheme: ExtendedTheme = {
  ...DefaultTheme,
  colors: {
    ...LightTheme.colors,
    background: palette.black,
    foreground: palette.white,
    text: palette.white,
    tabBar: palette.black,
    iconWhite: palette.black,
    iconBlack: palette.white,
    dynamicBackground: palette.dynamicBlack,
    shadow: palette.transparent,
    borderColor: palette.borderColorDark,
    primary: palette.white,
    primaryDark: palette.black,
    primaryLight: palette.white,
    secondary: palette.dynamicBlack,
    secondaryDark: palette.dynamicBlack,
  },
};
