import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Sparkles } from "lucide-react";

export function AnimatedButton() {
  return (
    <div className="z-10 flex items-center justify-center">
      <ShimmerButton className="shadow-2xl px-4 py-2">
        <div className="flex items-center space-x-2">
          <Sparkles size={16} />
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-white animate-text-shimmer">
            Innovate Digital Development
          </span>
        </div>
      </ShimmerButton>
    </div>
  );
}
