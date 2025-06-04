import "./CallToActionButton.css";

type CallToActionButtonProps = {
  buttonText: string;
  href: string;
  focusRef?: React.RefObject<HTMLAnchorElement | null>;
  onKeyDown?: React.KeyboardEventHandler<HTMLAnchorElement>;
};

function CallToActionButton(props: CallToActionButtonProps) {
  const { buttonText, href, focusRef, onKeyDown } = props;

  return (
    <>
      <div className="button--wrapper">
        <a
          className="call-to-action-button"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          ref={focusRef}
          onKeyDown={onKeyDown}
        >
          {buttonText}
        </a>
      </div>
    </>
  );
}

export default CallToActionButton;
