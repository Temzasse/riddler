import React from "react";

import { styled } from "@styles/styled";
import { Stack, Text } from "./common";

export type CaseInfo = {
  id: string;
  name: string;
};

type Props = {
  info: CaseInfo;
};

export default function CaseFileInfo({ info }: Props) {
  return (
    <Wrapper>
      <LeftSide></LeftSide>
      <RightSide>
        <Stack axis="y" spacing="large" align="center">
          <Text variant="caseFile" color="caseFileText">
            {info.name}
          </Text>
        </Stack>
      </RightSide>
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  backgroundColor: "$caseFileBackgroundDark",
  display: "flex",
  height: "90vh",
});

const LeftSide = styled("div", {
  flex: 1,
  backgroundColor: "$caseFileBackgroundLight",
  padding: "$medium",
  maxHeight: "100%",
  overflow: "auto",
});

const RightSide = styled("div", {
  flex: 1,
  backgroundColor: "$caseFileBackgroundDark",
  padding: "$medium",
  maxHeight: "100%",
  overflow: "auto",
});
