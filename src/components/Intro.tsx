import { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styled } from "../styles/styled";
import Terminal, { TerminalRef } from "./Terminal";

type Props = {
  onNext: () => void;
};

const introLines = [
  "Hello",
  "I've been waiting for you",
  "I have some bad news for you",
  "All your friends are... dead.",
  "They have been mysteriously murdered...",
  "...by me! :)",
  "To gather your courage you need to drink a shot",
  "After that, type 'anna' to start",
];

export default function Intro({ onNext }: Props) {
  const [replyEnabled, setReplyEnabled] = useState(false);
  const terminalRef = useRef<TerminalRef>();

  function handleUserLineInsert(line: string) {
    if (!replyEnabled) return;

    if (line === "anna") {
      onNext();
    } else {
      terminalRef.current?.reply("Are you scared?");
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
