import Link from "next/link";
import { Heart } from "lucide-react";

function CopyRights() {
  return (
    <div className="flex justify-between items-center pt-4">
      <p className="flex items-center space-x-1  text-neutral-600 text-sm">
        <span>© 2025</span>
        <Link href="/" className="hover:underline">
          CodeContestHub
        </Link>
        <span>All rights reserved.</span>
      </p>
      <p className="flex items-center space-x-1 text-neutral-600 text-sm">
        <span>Made with </span>
        <Heart className="h-4 w-4 text-red-600" />
        <span>for competitive programming</span>
      </p>
    </div>
  );
}

export default CopyRights;
