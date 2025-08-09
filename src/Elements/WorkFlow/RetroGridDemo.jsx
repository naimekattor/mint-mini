import { RetroGrid } from "@/components/magicui/retro-grid";
import flow from "../../assets/flow.png";

export function RetroGridDemo() {
  return (
    <div className="relative flex h-[250px] md:h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-[#010231]">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
        <img src={flow} alt="" className="w-[700px] md:w-full" />
      </span>
      <RetroGrid />
    </div>
  );
}
