import * as React from "react";
import type { ComponentProps } from "react";
import type { VariantProps } from "@stitches/react";
import { styled } from "@styles/styled";
import { themeProp } from "@styles/helpers";

type StackVariants = VariantProps<typeof StackRoot>;
type StackProps = StackVariants &
  ComponentProps<typeof StackRoot> & {
    wrapperProps?: ComponentProps<typeof StackWrapper>;
  };

export function Stack({ wrapperProps, ...rest }: StackProps) {
  return (
    <StackWrapper {...wrapperProps}>
      <StackRoot {...rest} />
    </StackWrapper>
  );
}

const childWithSpacing = "& > *:not([data-spacer]) + *:not([data-spacer])";

const StackWrapper = styled("div");

const StackRoot = styled("div", {
  display: "flex",
  $$spacing: "initial",
  variants: {
    ...themeProp("spacing", "space", (value) => ({
      $$spacing: `$space${value}`,
    })),
    axis: {
      x: {
        flexDirection: "row",
        [childWithSpacing]: {
          margin: "0 0 0 $$spacing",
        },
      },
      y: {
        flexDirection: "column",
        [childWithSpacing]: {
          margin: "$$spacing 0 0 0",
        },
      },
      xReverse: {
        flexDirection: "row-reverse",
        [childWithSpacing]: {
          margin: "0 $$spacing 0 0",
        },
      },
      yReverse: {
        flexDirection: "column-reverse",
        [childWithSpacing]: {
          margin: "0 0 $$spacing 0",
        },
      },
    },
    align: {
      start: { alignItems: "flex-start" },
      end: { alignItems: "flex-end" },
      center: { alignItems: "center" },
      stretch: { alignItems: "stretch" },
      baseline: { alignItems: "baseline" },
    },
    justify: {
      start: { justifyContent: "flex-start" },
      end: { justifyContent: "flex-end" },
      center: { justifyContent: "center" },
      stretch: { justifyContent: "stretch" },
      around: { justifyContent: "space-around" },
      between: { justifyContent: "space-between" },
      evenly: { justifyContent: "space-evenly" },
    },
  },
  defaultVariants: {
    axis: "x",
    spacing: "normal",
  },
});
