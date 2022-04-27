import { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styled } from "../styles/styled";
import { introAnswers, introLines } from "../common/data";
import { getRandomFromArray } from "../common/utils";
import Terminal, { TerminalRef } from "./Terminal";

type Props = {
  onNext: () => void;
};

export default function Intro({ onNext }: Props) {
  const [replyEnabled, setReplyEnabled] = useState(false);
  const terminalRef = useRef<TerminalRef>();

  function handleUserLineInsert(line: string) {
    if (!replyEnabled) return;

    if (line.trim().toLowerCase() === "anna") {
      onNext();
    } else {
      terminalRef.current?.reply(getRandomFromArray(introAnswers));
    }
  }

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div layout="position">
        <Terminal
          ref={terminalRef}
          killerLines={introLines}
          onUserLineInserted={handleUserLineInsert}
          onKillerLinesFinished={() => setReplyEnabled(true)}
        />
      </motion.div>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div, {
  flex: 1,
  flexCenter: "column",
});
