import { useState } from "react";
import dialogue from "../../data/dialogue.json";

import "./Mccordinator.css";

function Mccordinator() {
  const [dialogueNumber, setDialogueNumber] = useState(0);
  const [bubbleText, setBubbleText] = useState({
    text: "",
    continue: "",
    exit: "",
  });
  const [showBubble, setShowBubble] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);

  const nextDialogueQueue = () => {
    const next = dialogueNumber >= dialogue.length - 1 ? 0 : dialogueNumber + 1;

    setBubbleText(dialogue[dialogueNumber]);
    setDialogueNumber(next);
  };

  const closeDialogue = () => {
    setShowBubble(false);
    setDialogueNumber(0);

    nextDialogueQueue();
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
  };

  return (
    <div>
      <div
        onClick={clickyTheFace}
        className="mccordinatorHead"
        style={{ backgroundImage: 'url("resources/mccordinator2_head.png")' }}
      ></div>

      {showBubble && (
        <div className="mccordinatorSpeechBubble">
          <p>{bubbleText.text}</p>
          <span onClick={nextDialogueQueue}> + {bubbleText.continue}</span>
          <span onClick={closeDialogue}> + {bubbleText.exit}</span>
        </div>
      )}
    </div>
  );
}

export default Mccordinator;
