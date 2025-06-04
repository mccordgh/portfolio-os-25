import { useEffect } from "react";

type CloseButtonProps = {
  view: "mobile" | "desktop";
  onClickCallback: () => void;
  ref?: React.RefObject<HTMLAnchorElement | null>;
};

function CloseButton(props: CloseButtonProps) {
  const { view, ref, onClickCallback } = props;

  const className = view === "desktop" ? "desktop-app_close" : "app_close";

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.focus();
    }
  }, [ref]);

  return (
    <div className={className}>
      <a
        ref={ref}
        href="#"
        onClick={onClickCallback}
        aria-label="Close Button to close the open app window"
      >
        X
      </a>
    </div>
  );
}

export default CloseButton;
