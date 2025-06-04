import { useRef, useState } from "react";
import dialogue from "../../data/dialogue.json";

import "./Mccordinator.css";

type MccordinatorDialogue = {
  text: string;
  continue: string;
  exit: string;
};

function Mccordinator() {
  const [dialogueNumber, setDialogueNumber] = useState(0);
  const [bubbleText, setBubbleText] = useState<MccordinatorDialogue>({
    text: "",
    continue: "",
    exit: "",
  });
  const [showBubble, setShowBubble] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);

  const firstDialogueOptionRef = useRef<HTMLAnchorElement>(null);
  const headLinkRef = useRef<HTMLAnchorElement>(null);

  const nextDialogueQueue = () => {
    const next = dialogueNumber >= dialogue.length - 1 ? 0 : dialogueNumber + 1;

    setBubbleText(dialogue[dialogueNumber]);
    setDialogueNumber(next);
  };

  const closeDialogue = () => {
    setShowBubble(false);
    setDialogueNumber(0);

    nextDialogueQueue();

    setTimeout(() => {
      headLinkRef.current?.focus();
    }, 100);
  };

  const showDialogue = () => {
    setShowBubble(true);
  };

  const clickyTheFace = () => {
    if (!hasInitialized) {
      setHasInitialized(true);
      nextDialogueQueue();
    }

    showDialogue();

    setTimeout(() => {
      firstDialogueOptionRef.current?.focus();
    }, 100);
  };

  return (
    <div>
      <div
        className="mccordinatorHead"
        style={{ backgroundImage: 'url("resources/mccordinator2_head.png")' }}
      >
        <a
          href="#"
          onClick={clickyTheFace}
          className="mccordinatorHeadLink"
          ref={headLinkRef}
        ></a>
      </div>

      {showBubble && (
        <div className="mccordinatorSpeechBubble">
          <p>{bubbleText.text}</p>
          <div className="speechBubbleChoicesWrapper">
            <a
              onClick={nextDialogueQueue}
              ref={firstDialogueOptionRef}
              href="#"
            >
              {" "}
              {">"} {bubbleText.continue}
            </a>
            <a onClick={closeDialogue} href="#">
              {" "}
              {">"} {bubbleText.exit}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mccordinator;
