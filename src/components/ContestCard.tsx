import { Calendar, Clock, Timer } from "lucide-react";
import { SquareArrowOutUpRight } from "lucide-react";

const cardColor = {
  "atcoder.jp": "stone-600",
  "leetcode.com": "yellow-600",
  "codeforces.com": "blue-600",
  "hackerrank.com": "green-600",
  "topcoder.com": "blue-600",
  "codechef.com": "red-600",
};

function ContestCard() {
  return (
    <div
      className={`w-[340px] p-4 border border-l-8 border-l-${cardColor["codechef.com"]} rounded-xl shadow-sm`}
    >
      <div className="flex justify-between">
        <span className="bg-neutral-200 px-2 py-1 rounded-xl text-sm font-medium ">
          Atcoder
        </span>
        <span className="bg-neutral-200 px-2 py-1 rounded-xl text-sm font-medium ">
          ongoing
        </span>
      </div>
      <p className="text-lg font-medium text-black text-left pt-2">
        At coder regular contest 123
      </p>
      <div className="py-4 text-sm text-gray-500 flex flex-col gap-y-1">
        <p className="flex gap-x-2 items-center">
          <Calendar className="w-4 h-4" />
          <span>date</span>
        </p>
        <p className="flex gap-x-2 items-center">
          <Clock className="w-4 h-4" />
          <span>time</span>
        </p>
        <p className="flex gap-x-2 items-center">
          <Timer className="w-4 h-4" />
          <span>duration</span>
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
          starts in 2h30m
        </span>
        <SquareArrowOutUpRight className="w-4 h-4" />
      </div>
    </div>
  );
}

export default ContestCard;
