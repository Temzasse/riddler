import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import useSound from "use-sound";

import Entry from "@components/Entry";
import Intro from "@components/Intro";
import Cases from "@components/Cases";

type Phase = "entry" | "intro" | "cases";

export default function Home() {
  const [playBackgroundSound] = useSound("/background.mp3");
  const [phase, setPhase] = useState<Phase>("cases");

  function handleEntry() {
    // playBackgroundSound();
    setPhase("intro");
  }

  function handleIntro() {
    setPhase("cases");
  }

  return (
    <AnimatePresence>
      {phase === "entry" && <Entry onNext={handleEntry} />}
      {phase === "intro" && <Intro onNext={handleIntro} />}
      {phase === "cases" && <Cases />}
    </AnimatePresence>
  );
}
