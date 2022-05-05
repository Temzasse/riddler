import type { CaseInfo } from "../common/types";
import { styled } from "../styles/styled";
import { Stack, Text } from "./common";
import Polaroid from "./Polaroid";
import RedactedText from "./RedactedText";

type Props = {
  info: CaseInfo;
};

export default function CaseFileInfo({ info }: Props) {
  return (
    <Wrapper>
      <LeftSide>
        <Polaroid img={info.img} />
      </LeftSide>

      <RightSide>
        <Stack axis="y" spacing="xlarge">
          <Stack axis="y" spacing="normal">
            <Text variant="caseFileTitle" color="caseFileText">
              Basic information
            </Text>

            <InfoSection axis="y" spacing="none">
              {info.details.map((detail) => (
                <InfoRow key={detail.label} axis="x" spacing="small">
                  <Text variant="caseFile" color="caseFileText">
                    {detail.label}:
                  </Text>
                  <Text variant="caseFile" color="caseFileText">
                    {detail.value}
                  </Text>
                </InfoRow>
              ))}
            </InfoSection>
          </Stack>

          <Stack axis="y" spacing="normal">
            <Text variant="caseFileTitle" color="caseFileText">
              Known details
            </Text>

            <InfoSection axis="y" spacing="none">
              {info.hints.map((hint) => (
                <InfoRow key={hint} axis="x" spacing="small">
                  <RedactedText>{hint}</RedactedText>
                </InfoRow>
              ))}
            </InfoSection>
          </Stack>
        </Stack>
      </RightSide>
    </Wrapper>
  );
}

const InfoSection = styled(Stack, {
  border: "2px solid $caseFileText",
});

const InfoRow = styled(Stack, {
  padding: "$small",
  borderBottom: "2px solid $caseFileText",
});

const Wrapper = styled("div", {
  backgroundColor: "$caseFileBackground",
  display: "flex",
  height: "90vh",
});

const LeftSide = styled("div", {
  flex: 1,
  backgroundColor: "$caseFileBackgroundDark",
  padding: "$medium",
  maxHeight: "100%",
  overflow: "auto",
  flexCenter: "column",
});

const RightSide = styled("div", {
  flex: 1,
  backgroundColor: "$caseFileBackgroundLight",
  padding: "$large",
  paddingTop: "$xxlarge",
  maxHeight: "100%",
  overflow: "auto",
});
