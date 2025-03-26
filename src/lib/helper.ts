export function timeLeft(start: string, duration: number) {
  let contestDate = new Date(start);
  let currentDate = new Date();
  let timeDiff = contestDate.getTime() - currentDate.getTime(); //time diff in milliseconds

  if (timeDiff > 0) {
    let days: number = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    let hours: number = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes: number = Math.floor(
      (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
    );
    let seconds: number = Math.floor((timeDiff % (1000 * 60)) / 1000);
    let timeLeft = `starts in ${days}d ${hours}h ${minutes}m ${seconds}s`;
    return { timeLeftString: timeLeft, status: "Upcoming" };
  } else if (timeDiff < 0 && Math.abs(timeDiff) < duration * 1000) {
    return { timeLeftString: "Ongoing", status: "Ongoing" };
  } else {
    return { timeLeftString: "Ended", status: "Ended" };
  }
}

export function formatter(start: string, duration: number) {
  const startDateObj = new Date(start);
  let optionsDate = { year: "numeric", month: "long", day: "numeric" };
  let optionsTime = { hour: "2-digit", minute: "2-digit", hour12: true };
  //@ts-ignore
  let startDate = startDateObj.toLocaleDateString("en-US", optionsDate);
  //@ts-ignore
  let startTime = startDateObj.toLocaleTimeString("en-US", optionsTime);

  let hours = Math.floor(duration / 3600);
  let minutes = Math.floor((duration % 3600) / 60);
  let durationString;
  if (minutes === 0) {
    durationString = `${hours}h`;
  } else {
    durationString = `${hours}h ${minutes}m`;
  }
  return { startDate, startTime, durationString };
}
