import React, { ComponentProps } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import { styled, keyframes } from "@styles/styled";

type Props = ComponentProps<typeof DialogPrimitive.Content> & {
  css: any;
};

export const DialogContent = React.forwardRef(
  ({ children, ...props }: Props, forwardedRef) => (
    <DialogPrimitive.Portal>
      <Overlay />
      <Content {...props} ref={forwardedRef as any}>
        {children}
        <Close>
          <Cross1Icon />
        </Close>
      </Content>
    </DialogPrimitive.Portal>
  )
);

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const Content = styled(DialogPrimitive.Content, {
  backgroundColor: "white",
  borderRadius: "$medium",
  overflow: "hidden",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "95vw",
  maxHeight: "90vh",
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  "&:focus": {
    outline: "none",
  },
});

const Overlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: "rgba(0,0,0,0.5)",
  position: "fixed",
  inset: 0,
  backdropFilter: "blur(10px)",
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
});

const Close = styled(DialogPrimitive.Close, {
  position: "absolute",
  right: 16,
  top: 16,
  width: "32px",
  height: "32px",
  cursor: "pointer",
  borderRadius: "$full",
  flexCenter: "column",
  border: "none",
  outline: "none",
  backgroundColor: "rgba(0,0,0,0.2)",
});
