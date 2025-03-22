"use client";
import { useState } from "react";
import { Funnel } from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";

const platforms = [
  { name: "atcoder", color: "bg-stone-500" },
  { name: "codeforces", color: "bg-blue-500" },
  { name: "leetcode", color: "bg-yellow-500" },
  { name: "codechef", color: "bg-red-500" },
  { name: "all", color: "bg-green-500" },
];

function PlatformFilter({ selectedPlatform, setSelectedPlatform }: any) {
  const [isOpen, setIsOpen] = useState(false);

  function handleSelect(value: string) {
    if (value === "all") {
      setSelectedPlatform("");
    } else {
      setSelectedPlatform(value);
    }
    setIsOpen(false);
  }

  return (
    <div className="relative w-[98%] mx-auto mb-8">
      <button
        className="flex items-center gap-x-1 py-2 px-4 bg-blue-50 border border-indigo-600 text-indigo-600 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Funnel className="w-4 h-4" />
        <span className="text-sm font-medium">
          {selectedPlatform || "Platform"}
        </span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>
      {isOpen && (
        <div className="absolute top-12 left-0 z-10 p-2 rounded-md shadow-md border-b-2 bg-neutral-100 w-[200px] divide-y divide-black/50">
          {platforms.map((platform, ind) => (
            <button
              key={ind}
              className="flex items-center gap-x-2 w-full hover:bg-blue-100 py-1"
              onClick={() => handleSelect(platform.name)}
            >
              <div className={`h-4 w-4 ${platform.color} rounded-full`}></div>
              <span className="">{platform.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default PlatformFilter;
