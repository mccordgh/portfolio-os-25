type AnimationClassName = {
  [key: string]: string;
};

type AnimationName = "bounce" | "fadeOut" | "fadeIn";

const animationClassNames: AnimationClassName[] = [
  { bounce: "bouncing-element" },
  { fadeOut: "fade-out-element" },
  { fadeIn: "fade-in-element" },
];

class AnimationsHelper {
  static applyAnimationToElement(
    element: HTMLElement | null,
    animationName: AnimationName,
    duration?: number,
    callback?: () => void
  ): void {
    const animationClass = animationClassNames.find(
      (anim) => anim[animationName]
    );

    if (!element || !animationClass) {
      return;
    }

    if (!duration) {
      duration = 1000; // Default duration if not provided
    }

    const className = Object.values(animationClass)[0];
    element.classList.add(className);

    setTimeout(() => {
      element.classList.remove(className);
      if (callback) {
        callback();
      }
    }, duration);
  }

  static removeAnimationFromElement(
    element: HTMLElement | null,
    animationName: AnimationName
  ): void {
    const animationClass = animationClassNames.find(
      (anim) => anim[animationName]
    );

    if (!element || !animationClass) {
      return;
    }

    const className = Object.values(animationClass)[0];
    element.classList.remove(className);
  }
}

export default AnimationsHelper;
