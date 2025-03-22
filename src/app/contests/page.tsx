import { contestTypes } from "@/lib/types";
import ContestSection from "@/components/ContestSection";

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
  const includedContests = contests.filter((contest) =>
    platforms.includes(contest.host)
  );

  return (
    <div className="">
      <div className="p-6 mt-16">
        <ContestSection contests={includedContests} />
      </div>
    </div>
  );
}
