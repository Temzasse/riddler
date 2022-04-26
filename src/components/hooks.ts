import { useEffect } from "react";
import { useImmer } from "use-immer";
import { useLocalStorage } from "react-use";

import {
  CaseId,
  Phase,
  cases as initialCases,
  knownWords as initialKnownWords,
} from "./data";

const PHASE_KEY = "@riddler/phase";
const WORDS_KEY = "@riddler/words";
const CASES_KEY = "@riddler/cases";

// @ts-ignore
window.resetGame = () => {
  localStorage.removeItem(PHASE_KEY);
  localStorage.removeItem(WORDS_KEY);
  localStorage.removeItem(CASES_KEY);
};

export function usePhases() {
  const [phase, setPhase] = useLocalStorage<Phase>(PHASE_KEY, "intro");

  function onIntroDone() {
    setPhase("cases");
  }

  function onCasesDone() {
    setPhase("ending");
  }

  return { phase, onIntroDone, onCasesDone };
}

export function useCases() {
  const [persistedValue, setPersistedValue] = useLocalStorage(CASES_KEY, initialCases); // prettier-ignore
  const [cases, setCases] = useImmer(persistedValue!);

  function revealHint(id: CaseId) {
    setCases((draft) => {
      const ca = draft.find((c) => c.id === id)!;
      const hintIndex = ca.hints.findIndex((h) => h.includes("["));

      if (hintIndex >= 0) {
        ca.hints[hintIndex] = ca.hints[hintIndex].replace(/[\[\]]/g, "");
      }

      return draft;
    });
  }

  useEffect(() => {
    setPersistedValue(cases);
  }, [cases]);

  return { cases, revealHint };
}

export function useKnownWords() {
  const [persistedValue, setPersistedValue] = useLocalStorage("WORDS_KEY", initialKnownWords); // prettier-ignore
  const [knownWords, setKnownWords] = useImmer(persistedValue!);

  function removeKnownWord(word: string) {
    setKnownWords((draft) => {
      const index = draft.indexOf(word);

      if (index >= 0) {
        draft.splice(index, 1);
      }

      return draft;
    });
  }

  useEffect(() => {
    setPersistedValue(knownWords);
  }, [knownWords]);

  return { knownWords, removeKnownWord };
}
