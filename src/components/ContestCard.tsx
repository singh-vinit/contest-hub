"use client";
import { useState, useEffect } from "react";

import { Calendar, Clock, Timer, Hourglass } from "lucide-react";
import { SquareArrowOutUpRight } from "lucide-react";
import { formatter, timeLeft } from "@/lib/helper";

const cardColor: { [key: string]: string } = {
  "atcoder.jp": "border-l-green-200",
  "leetcode.com": "border-l-yellow-200",
  "codeforces.com": "border-l-blue-200",
  "codechef.com": "border-l-red-200",
};

const bgColor: { [key: string]: string } = {
  "atcoder.jp": "bg-green-200",
  "leetcode.com": "bg-yellow-200",
  "codeforces.com": "bg-blue-200",
  "codechef.com": "bg-red-200",
};

const txtColor: { [key: string]: string } = {
  "atcoder.jp": "text-green-600",
  "leetcode.com": "text-yellow-600",
  "codeforces.com": "text-blue-600",
  "codechef.com": "text-red-600",
};

const statusColor: { [key: string]: string } = {
  Ongoing: "bg-green-500",
  Upcoming: "bg-yellow-500",
  Ended: "bg-red-500",
};

interface ContestCardProps {
  duration: number;
  start: string;
  end: string;
  event: string;
  host: string;
  link: string;
}

function ContestCard({ duration, start, event, host, link }: ContestCardProps) {
  const { startDate, startTime, durationString } = formatter(start, duration);
  const { timeLeftString, status } = timeLeft(start, duration);

  const [timeLeftState, setTimeLeftState] = useState(timeLeftString);
  const [timeStatus, setTimeStatus] = useState(status);

  useEffect(() => {
    if (status === "Ended") return;
    const interval = setInterval(() => {
      const { timeLeftString, status } = timeLeft(start, duration);
      setTimeLeftState(timeLeftString);
      setTimeStatus(status);
    }, 1000);
    //cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [setTimeLeftState, duration, start, status]);

  return (
    <div
      className={`
        w-[340px] p-4 border border-l-8 rounded-xl shadow-sm ${cardColor[host]}`}
    >
      <div className="flex justify-between">
        <span
          className={`px-2 py-1 rounded-xl text-sm font-medium ${bgColor[host]}`}
        >
          {host.slice(0, host.indexOf("."))}
        </span>
        <div className="text-sm font-medium flex items-center gap-x-2">
          <div
            className={`w-[10px] h-[10px] rounded-full ${statusColor[timeStatus]}`}
          ></div>
          <span>{timeStatus}</span>
        </div>
      </div>
      <p className="text-lg font-medium text-black text-left pt-2">{event}</p>
      <div className="py-4 text-sm text-gray-500 flex flex-col gap-y-1">
        <p className="flex gap-x-2 items-center">
          <Calendar className="w-4 h-4" />
          <span>{startDate}</span>
        </p>
        <p className="flex gap-x-2 items-center">
          <Clock className="w-4 h-4" />
          <span>{startTime}</span>
        </p>
        <p className="flex gap-x-2 items-center">
          <Timer className="w-4 h-4" />
          <span>{durationString}</span>
        </p>
      </div>
      <div className="flex justify-between items-center pt-4">
        <div className="flex items-center gap-x-2">
          <span className="text-gray-700 text-sm font-medium">
            {timeLeftState}
          </span>
          {status != "Ended" && (
            <Hourglass className={`w-4 h-4 animate-spin ${txtColor[host]}`} />
          )}
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <SquareArrowOutUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

export default ContestCard;
