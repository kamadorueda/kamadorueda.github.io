import { GlobalStyles } from "./styles";
import { FunctionComponent } from "react";
import { RouterProvider } from "react-router-dom";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { router } from "~/router";

const theme: DefaultTheme = {
  primary: {
    light: "#ff5f37",
    medium: "#ff370d",
    dark: "#ff2600",
  },
  secondary: {
    light: "#ffe0ae",
    medium: "#ffcb78",
    dark: "#ffa600",
  },
  black: {
    light: "#757575",
    medium: "#616161",
    dark: "#212121",
  },
  white: {
    light: "#FAFAFA",
    medium: "#F5F5F5",
    dark: "#E0E0E0",
  },
};

export const Main: FunctionComponent = () => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </>
);
