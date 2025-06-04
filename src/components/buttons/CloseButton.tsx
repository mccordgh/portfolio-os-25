import { useEffect } from "react";

type CloseButtonProps = {
  view: "mobile" | "desktop";
  onClickCallback: () => void;
  // ref?: React.RefObject<HTMLAnchorElement | null>;
};

function CloseButton(props: CloseButtonProps) {
  const { view, onClickCallback } = props;

  const className =
    view === "desktop" ? "desktop-app_close-button" : "app_close-button";

  // useEffect(() => {
  //   if (ref && ref.current) {
  //     ref.current.focus();
  //   }
  // }, [ref]);

  return (
    <button
      className={className}
      // ref={ref}
      onClick={onClickCallback}
      aria-label="Close Button to close the open app window"
    >
      X
    </button>
  );
}

export default CloseButton;
