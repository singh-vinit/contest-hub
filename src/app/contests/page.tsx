import { contestTypes } from "@/lib/types";
import ContestSection from "@/components/ContestSection";
import Switch from "@/components/Switch";

const platforms = [
  "codeforces.com",
  "atcoder.jp",
  "codechef.com",
  "leetcode.com",
];

export default async function Contests({ searchParams }: { searchParams: { upcoming: string } }) {
  const params = searchParams;

  const res = await fetch(
    `https://clist.by/api/v4/contest/?upcoming=${params.upcoming}`,
    {
      method: "GET",
      headers: {
        Authorization: `ApiKey vinit_4:${process.env.NEXT_PUBLIC_API_KEY}`,
        "Content-Type": "application/json",
      },
      cache: "no-store", //avoid caching for fresh data
    }
  );

  const data = await res.json();
  const contests: contestTypes[] = data.objects;
  const includedContests = contests.filter((contest) =>
    platforms.includes(contest.host)
  );

  return (
    <div className="">
      <div className="p-6 mt-16">
        <Switch />
        <ContestSection contests={includedContests} />
      </div>
    </div>
  );
}
