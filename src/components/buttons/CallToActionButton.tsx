import "./CallToActionButton.css";

type CallToActionButtonProps = {
  buttonText: string;
  href: string;
  focusRef?: React.RefObject<HTMLAnchorElement | null>;
  onKeyDown?: React.KeyboardEventHandler<HTMLAnchorElement>;
  disabled?: boolean;
  disabledText?: string;
};

function CallToActionButton(props: CallToActionButtonProps) {
  const { buttonText, href, focusRef, disabled, disabledText, onKeyDown } =
    props;

  console.log({ disabled, disabledText });
  if (disabled && disabledText) {
    return (
      <div className="button--wrapper button--disabled">
        <a
          className="call-to-action-button"
          ref={focusRef}
          onKeyDown={onKeyDown}
        >
          {disabledText}
        </a>
      </div>
    );
  }

  return (
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
  );
}

export default CallToActionButton;
