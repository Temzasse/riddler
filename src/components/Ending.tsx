import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

import { styled } from "../styles/styled";
import { images } from "../common/images";
import { getRandomFromArray } from "../common/utils";
import { endingLines, endingWrongAnswers } from "../common/data";
import { Stack } from "./common";
import Terminal, { TerminalRef } from "./Terminal";

type Props = {
  onWin: () => void;
};

export default function Ending({ onWin }: Props) {
  const [showConfetti, setShowConfetti] = useState(false);
  const [replyEnabled, setReplyEnabled] = useState(false);
  const terminalRef = useRef<TerminalRef>();
  const dimensions = useWindowSize();

  function handleUserLineInsert(line: string) {
    if (replyEnabled && !showConfetti) {
      if (line === "yes") {
        terminalRef.current?.reply(
          "YES! I love you too! I will never let you go."
        );
        setShowConfetti(true);
        onWin();
      } else {
        terminalRef.current?.reply(getRandomFromArray(endingWrongAnswers));
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
        <Ascii src={images.anna} />

        <TerminalWrapper>
          <Terminal
            ref={terminalRef}
            killerLines={endingLines}
            onUserLineInserted={handleUserLineInsert}
            onKillerLinesFinished={() => setReplyEnabled(true)}
          />
        </TerminalWrapper>
      </Stack>

      {showConfetti && (
        <Confetti
          colors={["#009688", "#4CAF50", "#2db818", "#8BC34A"]}
          width={dimensions.width}
          height={dimensions.height}
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled(motion.div, {
  flex: 1,
  height: "100%",
});

const Ascii = styled("img", {
  flex: 1,
  maxWidth: "40vw",
  maxHeight: "80vh",
  width: "100%",
  height: "auto",
  objectFit: "contain",
  alignSelf: "flex-end",
});

const TerminalWrapper = styled("div", {
  flex: 1,
  flexCenter: "column",
  padding: "$xlarge",
});
