import { motion } from "framer-motion";

import { styled } from "../styles/styled";
import { Stack, Text, Button } from "./common";
import aaLogo from "../assets/aa-logo-green.png";

type Props = {
  entryLabel: string;
  onEntry: () => void;
};

export default function Entry({ entryLabel, onEntry }: Props) {
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Stack axis="y" spacing="xlarge" align="center">
        <Text variant="title1">Massacre of the AA</Text>
        <Logo src={aaLogo} />
        <Button onClick={onEntry}>{entryLabel}</Button>
      </Stack>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div, {
  flex: 1,
  flexCenter: "column",
});

const Logo = styled("img", {
  size: "300px",
  position: "relative",
});
