"use client";
import { useState } from "react";
import ContestCard from "@/components/ContestCard";
import { contestTypes } from "@/lib/types";
import PlatformFilter from "@/components/PlatformFilter";

interface props {
  contests: contestTypes[];
}

function ContestSection({ contests }: props) {
  const [selectedPlatform, setSelectedPlatform] = useState("");

  const filteredContests = contests.filter(
    (contest) =>
      contest.host.slice(0, contest.host.indexOf(".")) === selectedPlatform ||
      selectedPlatform === ""
  );

  return (
    <>
      <PlatformFilter
        selectedPlatform={selectedPlatform}
        setSelectedPlatform={setSelectedPlatform}
      />
      <div className="grid grid-cols-3 gap-y-10 w-[98%] mx-auto mb-8">
        {filteredContests.map((contest) => (
          <ContestCard
            key={contest.id}
            duration={contest.duration}
            start={contest.start}
            end={contest.end}
            event={contest.event}
            host={contest.host}
            link={contest.href}
          />
        ))}
      </div>
    </>
  );
}

export default ContestSection;
