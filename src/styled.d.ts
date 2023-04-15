import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: {
      light: string;
      medium: string;
      dark: string;
    };
    secondary: {
      light: string;
      medium: string;
      dark: string;
    };
    black: {
      light: string;
      medium: string;
      dark: string;
    };
    white: {
      light: string;
      medium: string;
      dark: string;
    };
  }
}
