import type { CaseInfo } from "../common/types";
import { styled } from "../styles/styled";

type Props = {
  img: CaseInfo["img"];
};

export default function Polaroid({ img }: Props) {
  return (
    <Wrapper>
      <Img src={img} />
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  backgroundColor: "#fff",
  padding: "$medium",
  paddingBottom: "$xxxlarge",
  borderRadius: "$small",
  position: "relative",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
  transform: "rotate(-2deg)",
});

const Img = styled("img", {
  width: "400px",
  height: "400px",
  filter: "contrast(105%) brightness(105%) sepia(30%) grayscale(100%)",
  border: "1px solid rgba(0,0,0,0.5) !important",

  "&:before": {
    content: "",
    display: "block",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    position: "absolute",
    pointerEvents: "none",
  },
});
