import React from "react";
import { motion } from "framer-motion";

import { styled } from "@styles/styled";
import { cases } from "./data";
import { Stack } from "./common";
import CaseFile from "./CaseFile";
import Terminal from "./Terminal";

type Props = {};

const casesLines = [
  "Are you as excited as I am?",
  "Here on the left you have all the cases you need to solve",
  "Each of them contains redacted information",
];

export default function Cases({}: Props) {
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Stack axis="x" spacing="xxlarge">
        <CasesGrid>
          {cases.map((caseInfo) => (
            <CaseFile key={caseInfo.id} info={caseInfo} />
          ))}
        </CasesGrid>

        <TerminalWrapper>
          <Terminal killerLineTexts={casesLines} onFinished={() => {}} />
        </TerminalWrapper>
      </Stack>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div, {
  flex: 1,
  padding: "$xxxlarge",
});

const CasesGrid = styled("div", {
  flex: 1,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "$large",
});

const TerminalWrapper = styled("div", {
  flexCenter: "column",
});
