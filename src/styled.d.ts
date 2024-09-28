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
      lightPurple: string;
      purple: string;
      border: string;
      rowGreyBg: string;
      disabled: string;
      btnBg: string;
    };
    spacing: {
      xxs: string;
      xs: string;
      sm: string;
      smm: string;
      md: string;
      mmd: string;
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
        search: string;
        container: string;
        btnWidth: string;
        smallContainer: string;
      };
      height: {
        full: string;
        search: string;
        header: string;
        btnHeight: string;
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
      xxs: string;
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
    position: {
      static: string;
      relative: string;
      absolute: string;
      fixed: string;
      sticky: string;
      top: {
        small: string;
        medium: string;
        large: string;
        fiftyPercent: string;
      };
      right: {
        small: string;
        medium: string;
        large: string;
      };
      bottom: {
        small: string;
        medium: string;
        large: string;
      };
      left: {
        small: string;
        medium: string;
        large: string;
      };
    };
    shadows: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
