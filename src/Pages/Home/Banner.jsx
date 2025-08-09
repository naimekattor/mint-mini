import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Ripple } from "@/components/magicui/ripple";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { ArrowRight, Smartphone, Palette, Code } from "lucide-react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import { PiBriefcaseDuotone } from "react-icons/pi";
import { GoCodeReview } from "react-icons/go";
import { motion } from "framer-motion";
import { BorderBeam } from "@/components/magicui/border-beam";
import { LuBrainCircuit } from "react-icons/lu";
import { TbFileAnalytics } from "react-icons/tb";
import { GiWorld } from "react-icons/gi";
import { ReactTyped } from "react-typed";

export default function Banner() {
  const profile_info = [
    { id: 2, name: "362+ Reviews", icon: GoCodeReview },
    { id: 1, name: "5.0 Rating", icon: MdOutlineStarPurple500 },
    { id: 4, name: "Fast Delivery", icon: PiBriefcaseDuotone },
    { id: 3, name: "Level 2 Seller", icon: SlBadge },
  ];

  return (
    <section className="relative bg-[#010231] dark:bg-black overflow-hidden ">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gray-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gray-100/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.02)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)]"></div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto md:px-4 pt-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-5">
            <div className="px-3 md:px-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white dark:text-white">
                <span>Professional</span>
                <br />
                <ReactTyped
                  strings={["AI Developer", "App Developer", "Web Developer"]}
                  typeSpeed={90}
                  backSpeed={50}
                  loop
                  className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl capitalize font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#cfea00] via-[#0fdd33] to-[#339c45]"
                />
                <br />
                <span>on Fiverr</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white dark:text-gray-300 leading-relaxed max-w-2xl mt-3">
                We do <strong>Web Development</strong> and build{" "}
                <strong>Neural Networks</strong> — empowering your ideas with
                cutting-edge apps and stunning UI. Satisfaction guaranteed.
              </p>
            </div>

            {/* Profile Info */}
            <div className="grid grid-cols-2 px-3 md:px-0 sm:grid-cols-4 gap-3">
              {profile_info.map((info) => {
                const Icon = info.icon;
                return (
                  <div
                    key={info.id}
                    className="group flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-[#010231] shadow-sm transition-all hover:cursor-pointer hover:bg-gray-100 dark:border-white/10 dark:bg-black dark:text-white dark:hover:bg-gray-900"
                  >
                    <Icon
                      size={20}
                      className="text-black dark:text-white group-hover:scale-110 transition-transform"
                    />
                    <AnimatedShinyText className="text-[14px] sm:text-[16px] font-medium text-gray-900 dark:text-white">
                      {info.name}
                    </AnimatedShinyText>
                  </div>
                );
              })}
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 px-3 md:px-0 pt-3">
              {[
                { icon: Smartphone, text: "Mobile App Development" },
                { icon: Palette, text: "Mobile App Design" },
                { icon: Code, text: "Flutter App Developer" },
                { icon: GiWorld, text: "Web Development" },
                { icon: TbFileAnalytics, text: "AI-Powered Analytics" },
                { icon: LuBrainCircuit, text: "Custom AI Development" },
              ].map(({ icon: Icon, text }, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className="bg-white dark:bg-black border-[#339c45] dark:border-gray-700 text-[#010231] dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {text}
                </Badge>
              ))}
            </div>

            {/* CTA Button */}
            <div className="inline-block mt-6 px-3 md:px-0">
              <Button
                size="lg"
                className="relative overflow-hidden bg-gradient-to-r from-[#cfea00] via-[#0fdd33] to-[#339c45] dark:bg-white text-[#010231] dark:text-black py-4 sm:py-5 text-[16px] font-semibold rounded-md shadow-lg hover:shadow-gray-500/50 transition-all duration-500 group"
              >
                <a
                  href="https://www.fiverr.com/mint_mini"
                  target="_blank"
                  className="relative z-10 flex items-center"
                >
                  View Profile
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </a>
                <span className="absolute inset-0 bg-gradient-to-r from-gray-700 to-black dark:from-gray-300 dark:to-white opacity-0 group-hover:opacity-30 transition-opacity duration-500"></span>
                <span className="absolute inset-0 bg-white/10 dark:bg-black/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <BorderBeam duration={8} size={250} />
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative group mb-10">
            <div className="overflow-hidden rounded-2xl relative">
              <img
                src="https://i.ibb.co/YFYx68TT/1723117614965-psd-new.png"
                alt="Gazi Alauddin - Tech Entrepreneur & CEO"
                className="relative mb-20 z-10 object-contain md:w-5/7 h-auto mx-auto"
              />
              <Ripple />

              <div className="absolute bottom-0 mt-4 left-0 right-0 p-4 text-center z-50">
                <div className="w-full max-w-[500px] mx-auto bg-gradient-to-r from-[#cfea00] via-[#0fdd33] to-[#339c45] dark:from-gray-300 dark:to-white p-4 rounded-lg backdrop-blur-sm shadow-lg">
                  <div className="flex flex-col items-center justify-center gap-1 w-full">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#010231] dark:text-black drop-shadow-md">
                      Mohin Uddin
                    </h3>
                    <div className="flex items-center justify-center gap-2">
                      <p className="text-[#010231] dark:text-black/90 text-sm font-medium">
                        Founder
                      </p>
                      <div className="w-1 h-1 bg-[#010231] dark:bg-black rounded-full"></div>
                      <p className="text-[#010231] dark:text-black/90 text-sm font-medium">
                        MINT MINI
                      </p>
                    </div>
                    <div className="mt-1 flex items-center justify-center gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-[#010231] dark:text-black/80">
                        Fiverr Verified Pro Seller
                      </span>
                    </div>
                  </div>
                  <BorderBeam duration={8} size={100} />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="relative group mb-32">
            <div className="overflow-hidden rounded-2xl relative">
            
              

              <img
                src="https://i.ibb.co/YFYx68TT/1723117614965-psd-new.png"
                alt="Gazi Alauddin - Tech Entrepreneur & CEO"
                className="relative mb-20 z-10 object-contain md:w-5/7 h-auto mx-auto"
              />
              <Ripple />

              <div className="absolute bottom-0 mt-4 left-0 right-0 p-4 text-center z-50">
  <div className="w-full max-w-[500px] mx-auto bg-gradient-to-r from-gray-500 to-black dark:from-gray-300 dark:to-white p-4 rounded-lg backdrop-blur-sm shadow-lg">
    <div className="flex flex-col items-center justify-center gap-1 w-full">
      <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-black drop-shadow-md">
        Gazi Alauddin
      </h3>
      <div className="flex items-center justify-center gap-2">
        <p className="text-white/90 dark:text-black/90 text-sm font-medium">CTO & Founder</p>
        <div className="w-1 h-1 bg-white dark:bg-black rounded-full"></div>
        <p className="text-white/90 dark:text-black/90 text-sm font-medium">MINT MINI</p>
      </div>
      <div className="mt-1 flex items-center justify-center gap-1">
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
        <span className="text-xs text-white/80 dark:text-black/80">Fiverr Verified Pro Seller</span>
      </div>
    </div>
    <BorderBeam duration={8} size={100} />
  </div>
</div>

            </div>
          </div> */}
        </div>
      </div>

      {/* Fade Bottom */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-black"></div> */}
    </section>
  );
}
