import React, { useState } from "react";
import { motion } from "framer-motion";

import { styled } from "@styles/styled";
import { Stack, Button } from "./common";
import Terminal from "./Terminal";

type Props = {
  onNext: () => void;
};

const lines = [
  "Hello",
  "I've been waiting for you",
  "I have some bad news for you",
  "All your friends are dead",
  "They have been mysteriosly murdered...",
  "...by me",
];

export default function Intro({ onNext }: Props) {
  const [isFinished, setFinished] = useState(false);

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Stack axis="y" spacing="large" align="center">
        <motion.div layout="position">
          <Terminal lines={lines} onFinished={() => setFinished(true)} />
        </motion.div>

        {isFinished && <Button onClick={onNext}>Ready to start?</Button>}
      </Stack>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div, {
  flex: 1,
  flexCenter: "column",
});
