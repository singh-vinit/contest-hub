import { Clock, Globe, ChevronsLeftRight } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Real-time Updates",
    description:
      "Get the latest information about contests as soon as they're announced.",
  },
  {
    icon: Globe,
    title: "Multi-platform",
    description:
      "Track contests from all major competitive programming websites in one place.",
  },
  {
    icon: ChevronsLeftRight,
    title: "Contest Details",
    description:
      "Access comprehensive information about each contest including difficulty level and duration.",
  },
];

function Features() {
  return (
    <div className="py-16">
      <h1 className="font-bold text-3xl text-gray-700 text-center capitalize">
        Why Use CodeContestHub
      </h1>
      <p className="text-lg text-gray-600 text-center">
        Designed for competitive programmers who want to stay ahead of the
        curve.
      </p>

      {/* feature cards */}
      <div className="flex justify-center gap-8 mt-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border-2 w-[300px] p-4 rounded-lg group hover:-translate-y-1 hover:border-indigo-500 transition-all duration-300 ease-in"
          >
            <div className="">
              <p className="bg-indigo-300/80 p-2 rounded-full w-fit">
                <feature.icon className="text-indigo-600 group-hover:rotate-[360deg] duration-500 ease-in-out" />
              </p>
            </div>
            <p className="text-lg font-medium text-gray-700 text-left py-2 group-hover:text-indigo-600">
              {feature.title}
            </p>
            <p className="text-gray-600 text-lg font-normal text-left leading-5">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
