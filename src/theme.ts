import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: "#0070f3",
    secondary: "#1DB954",
    background: "#f5f5f5",
    text: "#333",
    error: "#ff4d4d",
    success: "#28a745",
    warning: "#f39c12",
    info: "#3498db",
    white: "#ffffff",
    black: "#000000",
    gray: "#b0b0b0",
    purple: "#6941c6",
    border: "#e4e7ec",
  },
  spacing: {
    xxs: "2px",
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
    xxxl: "64px",
  },
  breakpoints: {
    xs: "480px",
    sm: "768px",
    md: "1024px",
    lg: "1200px",
    xl: "1440px",
  },
  borderRadius: {
    small: "4px",
    medium: "8px",
    large: "16px",
    rounded: "50%",
  },
  sizes: {
    width: {
      full: "100%",
      container: "1200px",
      smallContainer: "960px",
    },
    height: {
      full: "100vh",
      header: "68px",
      footer: "68px",
    },
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    xxl: "24px",
    xxxl: "32px",
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 600,
    extraBold: 700,
  },
  opacity: {
    none: 0,
    low: 0.25,
    medium: 0.5,
    high: 0.75,
    full: 1,
  },
  shadows: {
    small: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    medium: "0px 4px 8px rgba(0, 0, 0, 0.15)",
    large: "0px 8px 16px rgba(0, 0, 0, 0.2)",
  },
};

export default theme;
