import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      error: string;
      success: string;
      warning: string;
      info: string;
      white: string;
      black: string;
      gray: string;
      purple: string,
      border: string,
    };
    spacing: {
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    borderRadius: {
      small: string;
      medium: string;
      large: string;
      rounded: string;
    };
    sizes: {
      width: {
        full: string;
        container: string;
        smallContainer: string;
      };
      height: {
        full: string;
        header: string;
        footer: string;
      };
    };
    opacity: {
      none: number;
      low: number;
      medium: number;
      high: number;
      full: number;
    };
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    fontWeights: {
      regular: number;
      medium: number;
      bold: number;
      extraBold: number;
    };
    shadows: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
