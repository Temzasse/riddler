import { useImmer } from "use-immer";
import { useLocalStorage } from "react-use";

import {
  CaseId,
  cases as initialCases,
  knownWords as initialKnownWords,
} from "./data";
import { useEffect } from "react";

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
