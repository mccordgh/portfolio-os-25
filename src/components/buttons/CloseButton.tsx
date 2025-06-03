type CloseButtonProps = {
  view: "mobile" | "desktop";
  onClickCallback: () => void;
};

function CloseButton(props: CloseButtonProps) {
  const { view, onClickCallback } = props;

  const className = view === "desktop" ? "desktop-app_close" : "app_close";

  return (
    <div className={className}>
      <span onClick={onClickCallback}>X</span>
    </div>
  );
}

export default CloseButton;
