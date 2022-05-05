import useSound from "use-sound";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import winSound from "./assets/win-sound.mp3";
import backgroundSound from "./assets/background.mp3";
import { usePhases } from "./common/hooks";
import Entry from "./components/Entry";
import Intro from "./components/Intro";
import Cases from "./components/Cases";
import Ending from "./components/Ending";

export default function App() {
  const [hasEntered, setEntered] = useState(false);
  const { phase, onCasesDone, onIntroDone } = usePhases();
  const [playWinSound] = useSound(winSound, { interrupt: true });
  const [playBackgroundSound, { stop: stopBackgroundSound }] = useSound(
    backgroundSound,
    { loop: true, interrupt: true }
  );

  function handleEntryDone() {
    playBackgroundSound();
    setEntered(true);
  }

  function handleWin() {
    stopBackgroundSound();
    requestAnimationFrame(() => {
      playWinSound();
    });
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
      {phase === "ending" && <Ending onWin={handleWin} />}
    </AnimatePresence>
  );
}
