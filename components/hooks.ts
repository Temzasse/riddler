import useSound from "use-sound";
import { useEffect } from "react";
import { useImmer } from "use-immer";
import { useLocalStorage } from "react-use";

import {
  CaseId,
  Phase,
  cases as initialCases,
  knownWords as initialKnownWords,
} from "./data";

export function usePhases() {
  const [phase, setPhase] = useLocalStorage<Phase>("phase", "entry");
  const [playBackgroundSound] = useSound("/background.mp3", {
    loop: true,
    interrupt: true,
  });

  function onEntryDone() {
    playBackgroundSound();
    setPhase("intro");
  }

  function onIntroDone() {
    setPhase("cases");
  }

  function onCasesDone() {
    setPhase("ending");
  }

  useEffect(() => {
    // Replay background sound if page is reloaded accidentally
    if (phase !== "entry") playBackgroundSound();

    // @ts-ignore
    window.resetPhase = () => setPhase("entry");
  }, []);

  return { phase, onEntryDone, onIntroDone, onCasesDone };
}

export function useCases() {
  const [persistedValue, setPersistedValue] = useLocalStorage("cases", initialCases); // prettier-ignore
  const [cases, setCases] = useImmer(persistedValue);

  function revealHint(id: CaseId) {
    setCases((draft) => {
      const ca = draft.find((c) => c.id === id);
      const hintIndex = ca.hints.findIndex((h) => h.includes("["));

      if (hintIndex >= 0) {
        ca.hints[hintIndex] = ca.hints[hintIndex].replace(/[\[\]]/g, "");
      }

      return draft;
    });
  }

  useEffect(() => {
    // @ts-ignore
    window.resetCases = () => setPersistedValue(initialCases);
    setPersistedValue(cases);
  }, [cases]);

  return { cases, revealHint };
}

export function useKnownWords() {
  const [persistedValue, setPersistedValue] = useLocalStorage("words", initialKnownWords); // prettier-ignore
  const [knownWords, setKnownWords] = useImmer(persistedValue);

  useEffect(() => {
    // @ts-ignore
    window.resetKnownWords = () => setPersistedValue(initialKnownWords);
    setPersistedValue(knownWords);
  }, [knownWords]);

  function removeKnownWord(word: string) {
    setKnownWords((draft) => {
      const index = draft.indexOf(word);

      if (index >= 0) {
        draft.splice(index, 1);
      }

      return draft;
    });
  }

  return { knownWords, removeKnownWord };
}
