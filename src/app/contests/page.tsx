import ContestCard from "@/components/ContestCard";
import { contestTypes } from "@/lib/types";

const platforms = [
  "codeforces.com",
  "atcoder.jp",
  "codechef.com",
  "hackerrank.com",
  "leetcode.com",
  "topcoder.com",
];

export default async function Contests() {
  const res = await fetch("https://clist.by/api/v4/contest/?upcoming=true", {
    method: "GET",
    headers: {
      Authorization: `ApiKey vinit_4:${process.env.NEXT_PUBLIC_API_KEY}`,
      "Content-Type": "application/json",
    },
    cache: "no-store", //avoid caching for fresh data
  });

  const data = await res.json();
  const contests: contestTypes[] = data.objects;

  return (
    <div className="">
      <div className="p-6 mt-16">
        <div className="grid grid-cols-3 gap-y-10 w-[98%] mx-auto">
          {contests
            .filter((contest) => platforms.includes(contest.host))
            .map((contest) => (
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
      </div>
    </div>
  );
}
