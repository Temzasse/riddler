import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

import { styled } from "@styles/styled";
import { asciiAnna } from "./data";
import { Stack } from "./common";
import Terminal, { TerminalRef } from "./Terminal";

const endingLines = [
  "Hello my love",
  "Congratulations for solving all the murders",
  "Now we can live together without any distractions",
  "I hope you understand my motivations",
  "Will you still marry me? (yes/no)",
];

const wrongAnswers = [
  "Wrong answer, please try again :)",
  "You had a typo, please try again :)",
  "Couldn't quite get that, please try again :)",
  "Are you sure? Please try again :)",
];

export default function Ending() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [replyEnabled, setReplyEnabled] = useState(false);
  const terminalRef = useRef<TerminalRef>();

  function handleUserLineInsert(line: string) {
    if (replyEnabled && !showConfetti) {
      if (line === "yes") {
        terminalRef.current?.reply(
          "YES! I love you too! I will never let you go."
        );
        setShowConfetti(true);
      } else {
        const answer =
          wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)];
        terminalRef.current?.reply(answer);
      }
    }
  }

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Stack
        axis="x"
        spacing="xlarge"
        align="center"
        style={{ height: "100%" }}
        wrapperProps={{ style: { height: "100%" } }}
      >
        <Ascii>{asciiAnna}</Ascii>

        <TerminalWrapper>
          <Terminal
            ref={terminalRef}
            killerLines={endingLines}
            onUserLineInserted={handleUserLineInsert}
            onKillerLinesFinished={() => setReplyEnabled(true)}
          />
        </TerminalWrapper>
      </Stack>

      {typeof window !== "undefined" && showConfetti && (
        <Confetti colors={["#009688", "#4CAF50", "#2db818", "#8BC34A"]} />
      )}
    </Wrapper>
  );
}

const Wrapper = styled(motion.div, {
  flex: 1,
  height: "100%",
});

const Ascii = styled("div", {
  whiteSpace: "pre",
  fontSize: 7,
  fontFamily: "monospace",
  color: "$text",
  alignSelf: "flex-end",
});

const TerminalWrapper = styled("div", {
  flex: 1,
  flexCenter: "column",
  padding: "$xlarge",
});
