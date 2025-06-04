import "./CloseButton.css";

type CloseButtonProps = {
  view: "mobile" | "desktop";
  onClickCallback: () => void;
  ref?: React.RefObject<HTMLButtonElement | null>;
};

function CloseButton(props: CloseButtonProps) {
  const { view, ref, onClickCallback } = props;

  const className =
    view === "desktop" ? "desktop-app_close-button" : "app_close-button";

  return (
    <button
      className={className}
      ref={ref}
      onClick={onClickCallback}
      aria-label="Close Button to close the open app window"
    >
      X
    </button>
  );
}

export default CloseButton;
