export const tokens = {
  grey: {
    100: "#E8E8E8",
    200: "#CCCCCC",
    300: "#B0B0B0",
    400: "#949494",
    500: "#787878",
    600: "#5C5C5C",
    700: "#404040",
    800: "#242424",
    900: "#0A0A0A",
  },
  primary: {
    // Sky Blue Glow
    100: "#D4F0FF",
    200: "#A8E0FF",
    300: "#7BD0FF",
    400: "#4FC0FF",
    500: "#1FB2FF", // main bright sky blue
    600: "#1991CC",
    700: "#136F99",
    800: "#0C4C66",
    900: "#062A33",
  },
  secondary: {
    // Golden Accent
    100: "#FFF4D4",
    200: "#FFE9A8",
    300: "#FFDD7B",
    400: "#FFD14F",
    500: "#FFC31F",
    600: "#CC9C19",
    700: "#997514",
    800: "#664E0E",
    900: "#332707",
  },
  tertiary: {
    // Electric Pink Accent
    500: "#FF2F92",
  },
  background: {
    light: "#111111", // dark panels
    main: "#000000", // pure black background
  },
};

export const themeSettings = {
  palette: {
    primary: {
      ...tokens.primary,
      main: tokens.primary[500],
      light: tokens.primary[400],
    },
    secondary: {
      ...tokens.secondary,
      main: tokens.secondary[500],
    },
    tertiary: {
      ...tokens.tertiary,
    },
    grey: {
      ...tokens.grey,
      main: tokens.grey[500],
    },
    background: {
      default: tokens.background.main,
      light: tokens.background.light,
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 12,
    h1: { fontSize: 32 },
    h2: { fontSize: 24 },
    h3: {
      fontSize: 20,
      fontWeight: 800,
      color: tokens.grey[200],
    },
    h4: {
      fontSize: 14,
      fontWeight: 600,
      color: tokens.grey[300],
    },
    h5: {
      fontSize: 12,
      fontWeight: 400,
      color: tokens.grey[500],
    },
    h6: {
      fontSize: 10,
      color: tokens.grey[700],
    },
  },
};
