"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

function Switch() {
  const [isSelected, setIsSelected] = useState<"upcoming" | "ended">(
    "upcoming"
  );
  const router = useRouter();

  function handleEnded() {
    router.push("/contests?upcoming=false");
    setIsSelected("ended");
  }

  function handleUpcoming() {
    router.push("/contests?upcoming=true");
    setIsSelected("upcoming");
  }

  return (
    <div className="relative bg-gray-200 shadow-sm w-[200px] mx-auto rounded-full">
      <motion.div
        className="absolute inset-0 h-full bg-indigo-600 rounded-full"
        initial={false}
        animate={{
          width: "50%",
          x: isSelected === "upcoming" ? "100%" : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      ></motion.div>
      <button
        className={cn(
          "relative text-sm rounded-full w-[50%] h-full py-2 font-medium text-gray-600 cursor-pointer",
          isSelected === "ended" ? "text-white" : "text-gray-600"
        )}
        onClick={handleEnded}
      >
        past
      </button>
      <button
        className={cn(
          "relative text-sm rounded-full w-[50%] h-full py-2 font-medium text-gray-600 cursor-pointer",
          isSelected === "upcoming" ? "text-white" : "text-gray-600"
        )}
        onClick={handleUpcoming}
      >
        upcoming
      </button>
    </div>
  );
}

export default Switch;
