type CloseButtonProps = {
  view: "mobile" | "desktop";
  onClickCallback: () => void;
};

function CloseButton(props: CloseButtonProps) {
  const { view, onClickCallback } = props;

  const className = view === "desktop" ? "desktop-app_close" : "app_close";

  return (
    <div className={className}>
      <a
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
