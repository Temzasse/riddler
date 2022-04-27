import useSound from "use-sound";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import backgroundSound from "./assets/background.mp3";
import { usePhases } from "./common/hooks";
import Entry from "./components/Entry";
import Intro from "./components/Intro";
import Cases from "./components/Cases";
import Ending from "./components/Ending";

export default function App() {
  const [hasEntered, setEntered] = useState(false);
  const { phase, onCasesDone, onIntroDone } = usePhases();

  const [playBackgroundSound] = useSound(backgroundSound, {
    loop: true,
    interrupt: true,
  });

  function handleEntryDone() {
    playBackgroundSound();
    setEntered(true);
  }

  // We need a user action in order to play the background music so always
  // start from the entry view and require the user to press "Enter" button
  if (!hasEntered) {
    return (
      <Entry
        entryLabel={phase === "intro" ? "Enter" : "Continue"}
        onEntry={handleEntryDone}
      />
    );
  }

  return (
    <AnimatePresence>
      {phase === "intro" && <Intro onNext={onIntroDone} />}
      {phase === "cases" && <Cases onNext={onCasesDone} />}
      {phase === "ending" && <Ending />}
    </AnimatePresence>
  );
}
