import { Calendar, Clock, Timer } from "lucide-react";
import { SquareArrowOutUpRight } from "lucide-react";
import { formatter, timeLeft } from "@/lib/helper";
import Link from "next/link";

const cardColor: { [key: string]: string } = {
  "atcoder.jp": "border-l-stone-600",
  "leetcode.com": "border-l-yellow-500",
  "codeforces.com": "border-l-blue-600",
  "hackerrank.com": "border-l-green-600",
  "topcoder.com": "border-l-blue-600",
  "codechef.com": "border-l-red-600",
};

const platforms = [
  "codeforces.com",
  "atcoder.jp",
  "codechef.com",
  "hackerrank.com",
  "leetcode.com",
  "topcoder.com",
];

interface ContestCardProps {
  duration: number;
  start: string;
  end: string;
  event: string;
  host: string;
  link: string;
}

function ContestCard({
  duration,
  start,
  end,
  event,
  host,
  link,
}: ContestCardProps) {
  let { startDate, startTime, durationString } = formatter(start, duration);
  let { timeLeftString, status } = timeLeft(start, duration);

  return (
    <div
      className={`
        w-[340px] p-4 border border-l-8 rounded-xl shadow-sm ${cardColor[host]}`}
    >
      <div className="flex justify-between">
        <span className="bg-neutral-200 px-2 py-1 rounded-xl text-sm font-medium ">
          {host.slice(0, host.indexOf("."))}
        </span>
        <span className="bg-neutral-200 px-2 py-1 rounded-xl text-sm font-medium ">
          {status}
        </span>
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
      <p className="flex gap-x-4 items-center">
        <span className="text-[12px] text-gray-600 font-medium">
          Difficulty:
        </span>
        <span className="bg-red-300/40 py-1 px-2 rounded-xl font-medium text-[10px] text-red-600 capitalize">
          advanced
        </span>
      </p>
      <div className="flex justify-between items-center pt-4">
        <span className="text-gray-700 text-sm font-medium">
          {timeLeftString}
        </span>
        <a href={link} target="_blank" rel="noreferrer">
          <SquareArrowOutUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

export default ContestCard;
