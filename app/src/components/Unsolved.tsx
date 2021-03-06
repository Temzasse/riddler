import { styled } from "../styles/styled";
import { Text } from "./common";

export default function Unsolved() {
  return (
    <Wrapper>
      <Text
        variant="caseFile"
        color="caseFileTextClassified"
        style={{ fontWeight: 700, lineHeight: 1, transform: "translateY(3px)" }}
      >
        UNSOLVED
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  paddingVertical: "$xxsmall",
  paddingHorizontal: "$xsmall",
  border: "3px solid",
  borderColor: "$caseFileTextClassified",
  transform: "rotate(5deg)",
});
