type AnimationClassName = {
  [key: string]: string;
};

type AnimationName = "bounce";

const animationClassNames: AnimationClassName[] = [
  { bounce: "bouncing-element" },
];

class AnimationsHelper {
  static applyAnimationToElement(
    element: HTMLElement | null,
    animationName: AnimationName,
    duration: number,
    callback: () => void = () => {}
  ): void {
    const animationClass = animationClassNames.find(
      (anim) => anim[animationName]
    );

    if (!element) {
      console.warn("Element is null or undefined.");
      return;
    }

    if (!animationClass) {
      console.warn(`Animation ${animationName} not found.`);
      return;
    }

    const className = Object.values(animationClass)[0];
    element.classList.add(className);
    console.log(`Adding animation class: ${className}`);

    setTimeout(() => {
      console.log(`Removing animation class: ${className}`);
      element.classList.remove(className);
      callback();
    }, duration);
  }
}

export default AnimationsHelper;
