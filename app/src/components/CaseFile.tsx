import type { CaseInfo } from "../common/types";
import { styled } from "../styles/styled";
import { Stack, Text } from "./common";
import { Dialog, DialogContent, DialogTrigger } from "./Dialog";
import CaseFileInfo from "./CaseFileInfo";
import Unsolved from "./Unsolved";

type Props = {
  info: CaseInfo;
};

export default function CaseFile({ info }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Wrapper>
          <Stack axis="y" spacing="normal" align="center">
            <Text variant="caseFile" color="caseFileText">
              {info.name}
            </Text>
            <Unsolved />
          </Stack>
        </Wrapper>
      </DialogTrigger>

      <DialogContent css={{ backgroundColor: "$caseFileBackgroundDark" }}>
        <CaseFileInfo info={info} />
      </DialogContent>
    </Dialog>
  );
}

const Wrapper = styled("div", {
  backgroundColor: "$caseFileBackgroundLight",
  padding: "$large",
  position: "relative",
  aspectRatio: "1.4142 / 1",
  marginTop: "20px",
  flexCenter: "column",
  borderTopLeftRadius: "$medium",
  borderTopRightRadius: "$medium",
  borderBottomRightRadius: "$small",
  borderBottomLeftRadius: "$small",
  borderTop: "1px solid rgba(0,0,0,0.15)",
  cursor: "pointer",

  "&:before, &:after": {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    borderTopRightRadius: "$normal",
    borderTopLeftRadius: "$normal",
    zIndex: -1,
    transition: "transform 0.2s ease-in-out",
  },

  "&:before": {
    right: 0,
    backgroundColor: "$caseFileBackgroundDark",
    transform: "translateY(-10px)",
  },
  "&:after": {
    width: "33%",
    backgroundColor: "$caseFileBackgroundDark",
    transform: "translateY(-20px)",
  },
  "&:hover": {
    "&:before": {
      transform: "translateY(-14px)",
    },
    "&:after": {
      transform: "translateY(-24px)",
    },
  },
});
