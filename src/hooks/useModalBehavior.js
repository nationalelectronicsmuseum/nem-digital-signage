import { useEffect, useRef } from "react";

// Shared behavior for the app's overlays: move focus into the dialog when it
// opens, close it on Escape, and restore focus to the opener when it closes.
// The kiosk itself is touch-only (no keyboard), so Escape mainly serves staff
// and anyone using the web deployment.
export default function useModalBehavior(onClose) {
  const dialogRef = useRef(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    dialogRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onCloseRef.current();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, []);

  return dialogRef;
}
