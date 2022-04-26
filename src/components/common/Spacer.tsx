import type { ComponentProps } from "react";
import type { VariantProps } from "@stitches/react";
import { styled } from "../../styles/styled";
import { themeProp } from "../../styles/helpers";

type SpacerVariants = VariantProps<typeof SpacerRoot>;
type SpacerProps = SpacerVariants & ComponentProps<typeof SpacerRoot>;

export function Spacer(props: SpacerProps) {
  return <SpacerRoot {...props} data-spacer="true" />;
}

const SpacerRoot = styled("div", {
  $$amount: "$space$normal",
  flexShrink: 0,
  variants: {
    ...themeProp("amount", "space", (value) => ({
      $$amount: `$space${value}`,
    })),
    axis: {
      row: { width: "$$amount", height: "0px" },
      column: { height: "$$amount", width: "0px" },
    },
  },
  defaultVariants: {
    axis: "row",
    amount: "normal",
  },
});
