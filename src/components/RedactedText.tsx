import { styled } from "../styles/styled";
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
      {redacted.split(" ").map((word, wi) =>
        word.includes("*") ? (
          word.split("").map((char, ci) => (
            <HintChar
              key={`${char}-${ci}`}
              style={{ marginRight: ci === word.length - 1 ? 6 : 0 }}
            >
              {char}
            </HintChar>
          ))
        ) : (
          <HintWord key={`${word}-${wi}`}>{word}</HintWord>
        )
      )}
    </Text>
  );
}

const HintWord = styled("span", {
  display: "inline-block",
  marginRight: "6px",
});

const HintChar = styled("span", {
  display: "inline-block",
  backgroundColor: "$background",
  color: "transparent",
  minWidth: "12px",
});
