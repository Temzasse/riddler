import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { styled } from "@styles/styled";
import { Stack, Text, Button } from "./common";
import aaLogo from "../assets/aa-logo-green.png";

type Props = {
  onNext: () => void;
};

export default function Entry({ onNext }: Props) {
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Stack axis="y" spacing="large" align="center">
        <Text variant="title1">Massacre of the AA</Text>
        <Logo>
          <Image src={aaLogo} layout="fill" objectFit="contain" />
        </Logo>
        <Button onClick={onNext}>Enter</Button>
      </Stack>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div, {
  flex: 1,
  flexCenter: "column",
});

const Logo = styled("div", {
  size: "300px",
  position: "relative",
});
