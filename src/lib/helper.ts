export function timeLeft(start: string, duration: number) {
  const contestDate = new Date(start);
  const currentDate = new Date();
  const timeDiff = contestDate.getTime() - currentDate.getTime(); //time diff in milliseconds

  if (timeDiff > 0) {
    const days: number = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours: number = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes: number = Math.floor(
      (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds: number = Math.floor((timeDiff % (1000 * 60)) / 1000);
    const timeLeft = `starts in ${days}d ${hours}h ${minutes}m ${seconds}s`;
    return { timeLeftString: timeLeft, status: "Upcoming" };
  } else if (timeDiff < 0 && Math.abs(timeDiff) < duration * 1000) {
    return { timeLeftString: "Ongoing", status: "Ongoing" };
  } else {
    return { timeLeftString: "Ended", status: "Ended" };
  }
}

export function formatter(start: string, duration: number) {
  const startDateObj = new Date(start);
  const optionsDate = { year: "numeric", month: "long", day: "numeric" };
  const optionsTime = { hour: "2-digit", minute: "2-digit", hour12: true };
  // @ts-expect-error: Suppressing error because TypeScript does not recognize optionsDate as valid for toLocaleDateString
  const startDate = startDateObj.toLocaleDateString("en-US", optionsDate);
  // @ts-expect-error: Suppressing error because TypeScript does not recognize optionsTime as valid for toLocaleTimeString
  const startTime = startDateObj.toLocaleTimeString("en-US", optionsTime);

  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  let durationString;
  if (minutes === 0) {
    durationString = `${hours}h`;
  } else {
    durationString = `${hours}h ${minutes}m`;
  }
  return { startDate, startTime, durationString };
}
