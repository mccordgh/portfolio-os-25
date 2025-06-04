import "./CallToActionButton.css";

type CallToActionButtonProps = {
  buttonText: string;
  href?: string;
};

function CallToActionButton(props: CallToActionButtonProps) {
  const { buttonText, href } = props;

  return (
    <a
      className="call-to-action-button"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {buttonText}
    </a>
  );
}

export default CallToActionButton;
