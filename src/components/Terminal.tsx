import { useWindupString } from "windups";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import type { Line } from "../common/types";
import { styled } from "../styles/styled";
import { Stack, Text } from "./common";

type Props = {
  killerLines: string[];
  onKillerLinesFinished?: () => void;
  onUserLineInserted?: (line: string) => void;
};

export type TerminalRef = {
  reply: (text: string) => void;
};

const FACTOR = 1; // edit for easier testing
const PACE = 70 * FACTOR;
const DELAY = 1500 * FACTOR;

const Terminal = forwardRef(
  (
    { killerLines, onKillerLinesFinished, onUserLineInserted }: Props,
    ref: any
  ) => {
    const [isVisible, setVisible] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const terminal = useTerminal({
      killerLines,
      onKillerLinesFinished,
    });

    function handleSubmit(e: any) {
      e.preventDefault();
      const formData = new FormData(e.target);
      const values = Object.fromEntries(formData);
      const line = values.input as string;

      if (line) {
        terminal.insertUserLine(line);
        formRef.current?.reset();
        onUserLineInserted?.(line);
      }
    }

    useImperativeHandle(ref, () => ({
      reply: (text: string) => terminal.insertKillerLine(text),
    }));

    useEffect(() => {
      setTimeout(() => setVisible(true), 1000);
    }, []);

    useEffect(() => {
      requestAnimationFrame(() => {
        if (contentRef.current) {
          contentRef.current.scrollTop = contentRef.current.scrollHeight;
        }
      });
    }, [terminal.lines.length]);

    return (
      <Wrapper>
        <TerminalContent ref={contentRef}>
          {isVisible && (
            <Stack axis="y" spacing="small">
              {terminal.lines.map((line) => (
                <TerminalLine
                  key={line.id}
                  respondent={line.respondent}
                  onFinished={
                    line.respondent === "killer"
                      ? () => terminal.insertNextKillerLine(line.id)
                      : undefined
                  }
                >
                  {line.text}
                </TerminalLine>
              ))}
            </Stack>
          )}
        </TerminalContent>

        <TerminalForm ref={formRef} onSubmit={handleSubmit}>
          <Stack axis="x" spacing="xsmall" align="center">
            <Cursor />
            <TerminalInput
              name="input"
              placeholder="Reply here..."
              autoCorrect="false"
              spellCheck="false"
              autoFocus
            />
          </Stack>
        </TerminalForm>
      </Wrapper>
    );
  }
);

function TerminalLine({
  children,
  respondent,
  onFinished,
}: {
  children: string;
  respondent: "killer" | "user";
  onFinished?: () => void;
}) {
  const [text] = useWindupString(children, {
    pace: () => PACE,
    skipped: respondent === "user",
    onFinished,
  });

  return <TerminalText respondent={respondent}>{text}</TerminalText>;
}

function Cursor() {
  return (
    <CursorSvg
      width="20"
      height="7"
      viewBox="0 0 20 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 1.5C12 1.69167 11.9827 1.85833 11.9481 2C11.9827 2.13333 12 2.3 12 2.5C12 2.69167 11.9827 2.85833 11.9481 3H11.2987C11.3333 3.13333 11.3506 3.3 11.3506 3.5C11.3506 3.69167 11.3333 3.85833 11.2987 4H10.6494C10.684 4.13333 10.7013 4.3 10.7013 4.5C10.7013 4.69167 10.684 4.85833 10.6494 5H9.61039C9.57576 4.85833 9.55844 4.69167 9.55844 4.5C9.55844 4.3 9.57576 4.13333 9.61039 4H10.2597C10.2251 3.85833 10.2078 3.69167 10.2078 3.5C10.2078 3.3 10.2251 3.13333 10.2597 3H10.9091C10.8745 2.85833 10.8571 2.69167 10.8571 2.5C10.8571 2.3 10.8745 2.13333 10.9091 2C10.8745 1.85833 10.8571 1.69167 10.8571 1.5C10.8571 1.3 10.8745 1.13333 10.9091 1L9.09091 1C9.12554 1.13333 9.14286 1.3 9.14286 1.5C9.14286 1.69167 9.12554 1.85833 9.09091 2L8.05195 2C8.01732 1.85833 8 1.69167 8 1.5C8 1.3 8.01732 1.13333 8.05195 1L8.83117 1C8.79654 0.858333 8.77922 0.691666 8.77922 0.5C8.77922 0.3 8.79654 0.133333 8.83117 0L11.4286 0C11.4632 0.133333 11.4805 0.3 11.4805 0.5C11.4805 0.691666 11.4632 0.858333 11.4286 1L11.9481 1C11.9827 1.13333 12 1.3 12 1.5ZM10.6494 6C10.684 6.13333 10.7013 6.3 10.7013 6.5C10.7013 6.69167 10.684 6.85833 10.6494 7H9.61039C9.57576 6.85833 9.55844 6.69167 9.55844 6.5C9.55844 6.3 9.57576 6.13333 9.61039 6H10.6494Z"
        fill="currentColor"
      />
      <path
        d="M14.44 5.36801C14.256 5.36801 14.096 5.35201 13.96 5.32001C13.832 5.35201 13.672 5.36801 13.48 5.36801C13.296 5.36801 13.136 5.35201 13 5.32001L13 4.36001C13.136 4.32801 13.296 4.31201 13.48 4.31201C13.672 4.31201 13.832 4.32801 13.96 4.36001C14.096 4.32801 14.256 4.31201 14.44 4.31201C14.632 4.31201 14.792 4.32801 14.92 4.36001L14.92 2.44001C14.792 2.47201 14.632 2.48801 14.44 2.48801C14.256 2.48801 14.096 2.47201 13.96 2.44001C13.832 2.47201 13.672 2.48801 13.48 2.48801C13.296 2.48801 13.136 2.47201 13 2.44001L13 1.48001C13.136 1.44801 13.296 1.43201 13.48 1.43201C13.672 1.43201 13.832 1.44801 13.96 1.48001C14.096 1.44801 14.256 1.43201 14.44 1.43201C14.632 1.43201 14.792 1.44801 14.92 1.48001L14.92 1.84001C15.056 1.80801 15.216 1.79201 15.4 1.79201C15.592 1.79201 15.752 1.80801 15.88 1.84001C16.016 1.80801 16.176 1.79201 16.36 1.79201C16.552 1.79201 16.712 1.80801 16.84 1.84001L16.84 2.08001C16.976 2.04801 17.136 2.03201 17.32 2.03201C17.512 2.03201 17.672 2.04801 17.8 2.08001L17.8 2.44001C17.936 2.40801 18.096 2.39201 18.28 2.39201C18.472 2.39201 18.632 2.40801 18.76 2.44001L18.76 2.68001C18.896 2.64801 19.056 2.63201 19.24 2.63201C19.432 2.63201 19.592 2.64801 19.72 2.68001L19.72 4.12001C19.592 4.15201 19.432 4.16801 19.24 4.16801C19.056 4.16801 18.896 4.15201 18.76 4.12001L18.76 4.36001C18.632 4.39201 18.472 4.40801 18.28 4.40801C18.096 4.40801 17.936 4.39201 17.8 4.36001L17.8 4.72001C17.672 4.75201 17.512 4.76801 17.32 4.76801C17.136 4.76801 16.976 4.75201 16.84 4.72001L16.84 4.96001C16.712 4.99201 16.552 5.00801 16.36 5.00801C16.176 5.00801 16.016 4.99201 15.88 4.96001C15.752 4.99201 15.592 5.00801 15.4 5.00801C15.216 5.00801 15.056 4.99201 14.92 4.96001L14.92 5.32001C14.792 5.35201 14.632 5.36801 14.44 5.36801ZM15.88 4.00001C16.016 3.96801 16.176 3.95201 16.36 3.95201C16.552 3.95201 16.712 3.96801 16.84 4.00001L16.84 3.76001C16.976 3.72801 17.136 3.71201 17.32 3.71201C17.512 3.71201 17.672 3.72801 17.8 3.76001L17.8 3.04001C17.672 3.07201 17.512 3.08801 17.32 3.08801C17.136 3.08801 16.976 3.07201 16.84 3.04001L16.84 2.80001C16.712 2.83201 16.552 2.84801 16.36 2.84801C16.176 2.84801 16.016 2.83201 15.88 2.80001L15.88 4.00001Z"
        fill="currentColor"
      />
      <path
        d="M5.56 1.63199C5.744 1.63199 5.904 1.64799 6.04 1.67999C6.168 1.64799 6.328 1.63199 6.52 1.63199C6.704 1.63199 6.864 1.64799 7 1.67999L7 2.63999C6.864 2.67199 6.704 2.68799 6.52 2.68799C6.328 2.68799 6.168 2.67199 6.04 2.63999C5.904 2.67199 5.744 2.68799 5.56 2.68799C5.368 2.68799 5.208 2.67199 5.08 2.63999L5.08 4.55999C5.208 4.52799 5.368 4.51199 5.56 4.51199C5.744 4.51199 5.904 4.52799 6.04 4.55999C6.168 4.52799 6.328 4.51199 6.52 4.51199C6.704 4.51199 6.864 4.52799 7 4.55999L7 5.51999C6.864 5.55199 6.704 5.56799 6.52 5.56799C6.328 5.56799 6.168 5.55199 6.04 5.51999C5.904 5.55199 5.744 5.56799 5.56 5.56799C5.368 5.56799 5.208 5.55199 5.08 5.51999L5.08 5.15999C4.944 5.19199 4.784 5.20799 4.6 5.20799C4.408 5.20799 4.248 5.19199 4.12 5.15999C3.984 5.19199 3.824 5.20799 3.64 5.20799C3.448 5.20799 3.288 5.19199 3.16 5.15999L3.16 4.91999C3.024 4.95199 2.864 4.96799 2.68 4.96799C2.488 4.96799 2.328 4.95199 2.2 4.91999L2.2 4.55999C2.064 4.59199 1.904 4.60799 1.72 4.60799C1.528 4.60799 1.368 4.59199 1.24 4.55999L1.24 4.31999C1.104 4.35199 0.943999 4.36799 0.759998 4.36799C0.567998 4.36799 0.407999 4.35199 0.279999 4.31999L0.279999 2.87999C0.407999 2.84799 0.567998 2.83199 0.759998 2.83199C0.943999 2.83199 1.104 2.84799 1.24 2.87999L1.24 2.63999C1.368 2.60799 1.528 2.59199 1.72 2.59199C1.904 2.59199 2.064 2.60799 2.2 2.63999L2.2 2.27999C2.328 2.24799 2.488 2.23199 2.68 2.23199C2.864 2.23199 3.024 2.24799 3.16 2.27999L3.16 2.03999C3.288 2.00799 3.448 1.99199 3.64 1.99199C3.824 1.99199 3.984 2.00799 4.12 2.03999C4.248 2.00799 4.408 1.99199 4.6 1.99199C4.784 1.99199 4.944 2.00799 5.08 2.03999L5.08 1.67999C5.208 1.64799 5.368 1.63199 5.56 1.63199ZM4.12 2.99999C3.984 3.03199 3.824 3.04799 3.64 3.04799C3.448 3.04799 3.288 3.03199 3.16 2.99999L3.16 3.23999C3.024 3.27199 2.864 3.28799 2.68 3.28799C2.488 3.28799 2.328 3.27199 2.2 3.23999L2.2 3.95999C2.328 3.92799 2.488 3.91199 2.68 3.91199C2.864 3.91199 3.024 3.92799 3.16 3.95999L3.16 4.19999C3.288 4.16799 3.448 4.15199 3.64 4.15199C3.824 4.15199 3.984 4.16799 4.12 4.19999L4.12 2.99999Z"
        fill="currentColor"
      />
    </CursorSvg>
  );
}

function useTerminal({
  killerLines,
  onKillerLinesFinished,
}: {
  killerLines: string[];
  onKillerLinesFinished?: () => void;
}) {
  const [firstLine, ...otherLines] = useRef<Line[]>(
    killerLines.map((text) => ({
      id: generateId(),
      respondent: "killer",
      text,
    }))
  ).current;

  const [lines, setLines] = useState([firstLine]);
  const linesRemaining = useRef<Line[]>(otherLines);
  const lineIndex = useRef(0);

  function insertLine(line: Line) {
    lineIndex.current = lineIndex.current + 1;
    setLines((p) => insert(p, lineIndex.current, line));
  }

  function insertUserLine(text: string) {
    const line: Line = { id: generateId(), text, respondent: "user" };
    insertLine(line);

    if (linesRemaining.current.length > 0) {
      insertLine({
        id: generateId(),
        respondent: "killer",
        text: "Please don't interrupt me",
      });
    }
  }

  function insertKillerLine(text: string) {
    const line: Line = { id: generateId(), text, respondent: "killer" };
    insertLine(line);
  }

  function insertNextKillerLine(lineId: string) {
    if (linesRemaining.current.length === 0) {
      onKillerLinesFinished?.();
      return;
    }

    const killerLines = lines.filter((l) => l.respondent === "killer");
    const latestKillerLine = killerLines[killerLines.length - 1];

    if (latestKillerLine.id === lineId) {
      setTimeout(() => {
        const line = linesRemaining.current.shift();
        if (line) insertLine(line);
      }, DELAY);
    }
  }

  return { lines, insertUserLine, insertKillerLine, insertNextKillerLine };
}

function generateId() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

function insert(arr: any[], index: number, newItem: any) {
  return [...arr.slice(0, index), newItem, ...arr.slice(index)];
}

const Wrapper = styled("div", {
  width: "650px",
  minHeight: "700px",
  display: "flex",
  flexDirection: "column",
  padding: "$large",
  border: "1px solid rgba(150, 150, 150, 0.2)",
  borderRadius: "$small",
});

const TerminalContent = styled("div", {
  flex: 1,
  marginBottom: "$normal",
  minHeight: "60vh",
  maxHeight: "60vh",
  overflow: "auto",
});

const TerminalText = styled(Text, {
  position: "relative",
  display: "inline-block",

  "&:before": {
    position: "absolute",
    left: 0,
    top: 0,
    color: "$text",
    typography: "$body",
  },

  variants: {
    respondent: {
      killer: {
        paddingLeft: "$normal",
        "&:before": {
          content: "'>'",
        },
      },
      user: {
        paddingLeft: "$xlarge",
        "&:before": {
          content: "'(you)'",
        },
      },
    },
  },
});

const TerminalForm = styled("form", {});

const CursorSvg = styled("svg", {
  color: "$text",
  size: 40,
});

const TerminalInput = styled("input", {
  backgroundColor: "transparent",
  border: "none",
  outline: "none",
  color: "$text",
  typography: "$body",
  "&::placeholder": {
    color: "rgba(150, 150, 150, 0.3)",
  },
  "&::selection": {
    background: "$text",
    color: "$background",
  },
});

export default Terminal;
