import { createStitches } from "@stitches/react";

import {
  absoluteFill,
  fixedFill,
  flexCenter,
  margingHorizontal,
  paddingHorizontal,
  paddingVertical,
  size,
  typography,
} from "./utils";

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      primary: "#2db818",
      onPrimaryText: "#000",
      text: "#2db818",
      background: "#000",
    },
    fonts: {
      terminal: "'VT323', monospace",
      typewriter: "'Special Elite', cursive",
    },
    space: {
      none: "0px",
      xxsmall: "4px",
      xsmall: "8px",
      small: "12px",
      normal: "16px",
      medium: "24px",
      large: "32px",
      xlarge: "56px",
      xxlarge: "72px",
      xxxlarge: "120px",
    },
    radii: {
      small: "4px",
      normal: "8px",
      medium: "16px",
      large: "24px",
      full: "999px",
    },
  },
  utils: {
    absoluteFill,
    fixedFill,
    flexCenter,
    margingHorizontal,
    paddingHorizontal,
    paddingVertical,
    size,
    typography,
  },
  media: {
    xs: "(max-width: 374px)",
    sm: "(max-width: 640px)",
    md: "(max-width: 768px)",
    lg: "(max-width: 1024px)",
    xl: "(min-width: 1025px)",
  },
});

export type Theme = typeof theme;
export type Color = keyof typeof theme["colors"];
