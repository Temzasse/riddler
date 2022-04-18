import { styled } from "@styles/styled";
import { themeProp } from "@styles/helpers";

type Props = React.ComponentProps<typeof StyledText> & {
  as?: keyof JSX.IntrinsicElements;
};

export function Text(props: Props) {
  const variant =
    (typeof props.variant === "object"
      ? props.variant.initial
      : props.variant) || "body";

  const asTag = props.as || variantToTag[variant];

  return <StyledText {...(props as any)} as={asTag} />;
}

const variantToTag = {
  body: "p",
  bodyStrong: "strong",
  bodySmall: "p",
  quizTitle: "p",
  quizTitleSmall: "p",
  title1: "h1",
  title2: "h2",
  title3: "h3",
};

const StyledText = styled("p", {
  maxWidth: "65ch",
  margin: "0px",
  color: "$text",
  variants: {
    ...themeProp("color", "colors", (value) => ({
      color: `${value} !important`,
    })),
    variant: {
      body: { typography: "$body" },
      bodySmall: { typography: "$bodySmall" },
      caseFile: { typography: "$caseFile" },
      title1: { typography: "$title1" },
      title2: { typography: "$title2" },
      title3: { typography: "$title3" },
    },
    align: {
      left: { textAlign: "left" },
      right: { textAlign: "right" },
      center: { textAlign: "center" },
    },
  },
  defaultVariants: {
    variant: "body",
  },
});
