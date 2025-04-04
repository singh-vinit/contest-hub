import { Clock, Calendar } from "lucide-react";
import Link from "next/link";

function Hero() {
  return (
    <div className="py-[4.5rem] mt-16">
      <div className="w-[50%] mx-auto">
        <div className="bg-indigo-400/30 flex items-center gap-x-1.5 w-fit py-1 px-2 mx-auto rounded-2xl">
          <Clock className="w-4 h-4 text-indigo-500" />
          <p className="text-sm font-medium text-indigo-500">
            Never miss a coding contest again
          </p>
        </div>
        <div className="py-5">
          <h1 className="font-bold text-5xl text-center capitalize text-gray-700">
            all coding contests.
          </h1>
          <h1 className="font-bold text-5xl text-center capitalize text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-700">
            one platform.
          </h1>
        </div>
        <p className="text-xl text-center text-gray-600">
          Track competitive programming contests from Codeforces, LeetCode,
          AtCoder and more. Stay updated with upcoming challenges.
        </p>
        <div className="flex items-center gap-x-4 justify-center py-6">
          <Link
            href="/contests/upcoming"
            className="flex items-center gap-x-2 capitalize bg-indigo-500 text-lg text-white py-2 px-4 rounded-lg hover:bg-indigo-700 hover:shadow-2xl transition-all duration-200 ease-in"
          >
            <Calendar className="w-4 h-4" />
            <span>view all contests</span>
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-x-2 capitalize bg-neutral-200 text-lg text-black py-2 px-4 rounded-lg hover:bg-neutral-400 hover:shadow-2xl transition-all duration-200 ease-in"
          >
            learn more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
