import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import useSound from "use-sound";

import Entry from "@components/Entry";
import Intro from "@components/Intro";

type Phase = "entry" | "intro" | "game";

export default function Home() {
  const [playBackgroundSound] = useSound("/background.mp3");
  const [phase, setPhase] = useState<Phase>("entry");

  function handleEntry() {
    playBackgroundSound();
    setPhase("intro");
  }

  function handleIntro() {
    setPhase("game");
  }

  return (
    <AnimatePresence>
      {phase === "entry" && <Entry onNext={handleEntry} />}
      {phase === "intro" && <Intro onNext={handleIntro} />}
    </AnimatePresence>
  );
}
