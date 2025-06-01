const daysOfWeek = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];

export default class ClockHelper {
  static currentTime = () => {
    const currentTime = new Date(),
      currentDay = currentTime.getDay(),
      minutes = currentTime.getMinutes(),
      seconds = currentTime.getSeconds();

    let hours = currentTime.getHours(),
      displayMinutes = minutes.toString(),
      displaySeconds = seconds.toString();

    if (seconds < 10) {
      displaySeconds = `0${seconds}`;
    }

    if (minutes < 10) {
      displayMinutes = `0${minutes}`;
    }

    let suffix = "AM";

    if (hours >= 12) {
      suffix = "PM";
      hours = hours - 12;
    }

    if (hours === 0) {
      hours = 12;
    }

    return `${daysOfWeek[currentDay]} ${hours}:${displayMinutes}:${displaySeconds} ${suffix}`;
  };
}
