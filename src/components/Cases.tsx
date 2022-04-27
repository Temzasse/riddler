import { useRef, useState } from "react";
import { motion } from "framer-motion";

import type { CaseId } from "../common/types";
import { useCases, useKnownWords } from "../common/hooks";
import { casesLines } from "../common/data";
import { styled } from "../styles/styled";
import { Stack } from "./common";
import Terminal, { TerminalRef } from "./Terminal";
import CaseFile from "./CaseFile";

type Props = {
  onNext: () => void;
};

export default function Cases({ onNext }: Props) {
  const { cases, revealHint } = useCases();
  const { knownWords, removeKnownWord } = useKnownWords();
  const [replyEnabled, setReplyEnabled] = useState(false);
  const terminalRef = useRef<TerminalRef>();

  function handleUserLineInsert(line: string) {
    if (!replyEnabled) return;

    const [id, word] = line.toLowerCase().split("=");

    if (id === "anaaliahven") {
      onNext();
    } else if (knownWords.includes(word) && cases.find((c) => c.id === id)) {
      revealHint(id as CaseId);
      removeKnownWord(word);
      terminalRef.current?.reply("Very well done!");
    } else {
      terminalRef.current?.reply("I'm not impressed");
    }
  }

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
          <Terminal
            ref={terminalRef}
            killerLines={casesLines}
            onUserLineInserted={handleUserLineInsert}
            onKillerLinesFinished={() => setReplyEnabled(true)}
          />
        </TerminalWrapper>
      </Stack>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div, {
  flex: 1,
});

const CasesGrid = styled("div", {
  flex: 1,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
  gap: "$large",
  paddingLeft: "$xxxlarge",
  paddingVertical: "$xxxlarge",
});

const TerminalWrapper = styled("div", {
  flexCenter: "column",
  maxHeight: "100vh",
  paddingVertical: "$xxxlarge",
  paddingRight: "$xxxlarge",
});
