import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import useSound from "use-sound";

import Entry from "@components/Entry";
import Intro from "@components/Intro";
import Cases from "@components/Cases";
import Ending from "@components/Ending";

type Phase = "entry" | "intro" | "cases" | "ending";

export default function Home() {
  const [playBackgroundSound] = useSound("/background.mp3");
  const [phase, setPhase] = useState<Phase>("ending");

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
      {phase === "ending" && <Ending />}
    </AnimatePresence>
  );
}
