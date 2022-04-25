import React from "react";

import { styled } from "@styles/styled";
import { Text } from "./common";

export default function RedactedText({ children }: { children: string }) {
  const m = children.match(/\[(.*?)\]/g);
  const match = m ? m[0] : "";
  const redacted = children.replace(
    match,
    Array.from({ length: match.length - 2 })
      .map(() => "*")
      .join("")
  );

  return (
    <Text variant="caseFile" color="caseFileText">
      {redacted.split("").map((char, i) => (
        <HintChar key={`${char}-${i}`} redacted={char === "*"}>
          {char === " " ? "\xa0" : char}
        </HintChar>
      ))}
    </Text>
  );
}

const HintChar = styled("span", {
  display: "inline-block",
  variants: {
    redacted: {
      true: {
        backgroundColor: "$background",
        color: "transparent",
        minWidth: "12px",
      },
      false: {},
    },
  },
});
