import { styled } from "@styles/styled";

export const Button = styled("button", {
  typography: "$button",
  cursor: "pointer",
  position: "relative",
  paddingVertical: "$normal",
  paddingHorizontal: "$large",
  borderRadius: "2px",
  textDecoration: "none",

  "&:after": {
    content: `""`,
    absoluteFill: true,
    backgroundColor: "rgba(255,255,255,0.1)",
    opacity: 0,
    pointerEvents: "none",
  },

  "&:hover": {
    "&:after": {
      opacity: 1,
    },
  },

  "&:active": {
    "&:after": {
      backgroundColor: "rgba(255,255,255,0.2)",
    },
  },

  variants: {
    variant: {
      fill: {
        backgroundColor: "$primary",
        border: "1px solid $primary",
        color: "$onPrimaryText",
      },
      outline: {
        backgroundColor: "transparent",
        border: "1px solid $primary",
        color: "$primary",
      },
    },
  },
  defaultVariants: {
    variant: "fill",
  },
});
