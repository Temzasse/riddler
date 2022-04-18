import { CSSProperties } from "@stitches/react";

export type TypographyVariant =
  | "body"
  | "bodySmall"
  | "caseFile"
  | "button"
  | "title1"
  | "title2"
  | "title3";

export type TypographyVariantVar = `$${TypographyVariant}`;

export const rem = (px: number) => `${px / 16}rem`;

export const typographyVariants: {
  [variant in TypographyVariantVar]: CSSProperties;
} = {
  $body: {
    fontFamily: "$terminal",
    lineHeight: 1.5,
    fontSize: rem(24),
    fontWeight: 400,
  },
  $bodySmall: {
    fontFamily: "$terminal",
    lineHeight: 1.4,
    fontSize: rem(16),
    fontWeight: 400,
  },
  $caseFile: {
    fontFamily: "$typewriter",
    lineHeight: 1.5,
    fontSize: rem(20),
    fontWeight: 400,
  },
  $title1: {
    fontFamily: "$terminal",
    lineHeight: 1,
    fontSize: rem(88),
    fontWeight: 600,
  },
  $title2: {
    fontFamily: "$terminal",
    lineHeight: 1,
    fontSize: rem(48),
    fontWeight: 600,
  },
  $title3: {
    fontFamily: "$terminal",
    lineHeight: 1,
    fontSize: rem(26),
    fontWeight: 600,
  },
  $button: {
    fontFamily: "$terminal",
    lineHeight: 1,
    fontSize: rem(24),
    fontWeight: 400,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
  },
};
