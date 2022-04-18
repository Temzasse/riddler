import { motion } from "framer-motion";
import Confetti from "react-confetti";

import { styled } from "@styles/styled";
import { asciiAnna } from "./data";
import { Stack } from "./common";
import Terminal from "./Terminal";
import { useState } from "react";

const endingLines = [
  "Hello my love",
  "Congratulations for solving all the murders",
  "Now we can live together without any distractions",
  "I hope you understand my motivations",
  "Will you still marry me? (yes/no)",
];

export default function Ending() {
  const [showConfetti, setShowConfetti] = useState(false);

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
          <Terminal killerLineTexts={endingLines} onFinished={() => {}} />
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
  flex: 2,
  whiteSpace: "pre",
  fontSize: 10,
  fontFamily: "monospace",
  color: "$text",
  alignSelf: "flex-end",
  paddingLeft: "$xxlarge",
});

const TerminalWrapper = styled("div", {
  flex: 3,
  flexCenter: "column",
  padding: "$xlarge",
});
