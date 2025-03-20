import Leetcode from "../../public/leetcode.png";
import Codeforce from "../../public/codeforce.png";
import Atcoder from "../../public/atcoder.png";
import Codechef from "../../public/codechef.png";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const platforms = [
  {
    label: "Leetcode",
    image: Leetcode,
    href: "https://leetcode.com/",
  },
  {
    label: "Codeforce",
    image: Codeforce,
    href: "https://codeforces.com/",
  },
  {
    label: "Atcoder",
    image: Atcoder,
    href: "https://atcoder.jp/",
  },
  {
    label: "Codechef",
    image: Codechef,
    href: "https://www.codechef.com/",
  },
];

function Platforms() {
  return (
    <div className="py-4">
      <h1 className="font-bold text-3xl text-gray-700 text-center capitalize mb-10">
        supported platforms
      </h1>
      <div className="flex justify-center items-center gap-x-16">
        {platforms.map((platform, i) => (
          <div
            key={i}
            className="flex flex-col justify-center items-center gap-y-2 p-6 rounded-2xl w-32 border-2 cursor-pointer hover:-translate-y-1 hover:shadow-xl transition-transform duration-300"
          >
            <Image src={platform.image} alt="leetcode" width={24} height={24} />
            <span className="font-medium text-gray-700">{platform.label}</span>
            <Link
              href={platform.href}
              className="flex items-center gap-x-1 text-blue-600"
            >
              <span className="">visit</span>
              <MoveRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Platforms;
