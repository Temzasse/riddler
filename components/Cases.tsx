import React from "react";
import { motion } from "framer-motion";

import { styled } from "@styles/styled";
import { Stack } from "./common";
import { Dialog } from "./Dialog";
import CaseFile from "./CaseFile";
import Terminal from "./Terminal";

type Props = {};

const cases = [
  { id: "1", name: "Jopu" },
  { id: "2", name: "Jaakko" },
  { id: "3", name: "Ode" },
  { id: "4", name: "Meris" },
  { id: "5", name: "Lalli" },
  { id: "6", name: "Henu" },
  { id: "7", name: "Andreas" },
  { id: "8", name: "Eeki" },
  { id: "9", name: "Tasse" },
];

const casesLines = [
  "Hello",
  "I've been waiting for you",
  "I have some bad news for you",
  "All your friends are... dead.",
  "They have been mysteriosly murdered...",
  "...by me! :)",
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
            <Dialog key={caseInfo.id}>
              <CaseFile info={caseInfo} />
            </Dialog>
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
