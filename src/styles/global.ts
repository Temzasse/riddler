import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  "*, *::before, *::after": {
    boxSizing: "border-box",
  },
  "*": {
    margin: 0,
  },
  "html, body": {
    fontSize: 16,
    height: "100%",
    margin: 0,
    padding: 0,
    fontFamily: "$terminal",
    backgroundColor: "$background",
  },
  body: {
    lineHeight: 1.5,
    "-webkit-font-smoothing": "antialiased",
  },
  "img, picture, video, canvas, svg": {
    display: "block",
    maxWidth: "100%",
  },
  "input, button, textarea, select": {
    font: "inherit",
  },
  "p, h1, h2, h3, h4, h5, h6": {
    overflowWrap: "breakWord",
  },
  "#root": {
    isolation: "isolate",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
});
