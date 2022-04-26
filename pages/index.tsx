import { AnimatePresence } from "framer-motion";

import Entry from "@components/Entry";
import Intro from "@components/Intro";
import Cases from "@components/Cases";
import Ending from "@components/Ending";
import { usePhases } from "@components/hooks";

export default function Home() {
  const { phase, onCasesDone, onEntryDone, onIntroDone } = usePhases();

  return (
    <AnimatePresence>
      {phase === "entry" && <Entry onNext={onEntryDone} />}
      {phase === "intro" && <Intro onNext={onIntroDone} />}
      {phase === "cases" && <Cases onNext={onCasesDone} />}
      {phase === "ending" && <Ending />}
    </AnimatePresence>
  );
}
