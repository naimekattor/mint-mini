import FeatureCard from "./FeaturesCard";

function Features() {
  return (
    <div className="bg-[#010231] py-6">
      <div className="container mx-auto px-4">
        <div className="w-full relative">
          {/* Background Grid Lines */}
          <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(0,0,0,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.02)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] pointer-events-none"></div>

          {/* Heading */}
          <h2 className="text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-[#cfea00] via-[#0fdd33] to-[#339c45] text-transparent bg-clip-text mb-3 z-10 relative">
            Areas of Excellence
          </h2>
          <p className="text-white leading-none tracking-tight md:w-5/6 mx-auto pb-16 text-center text-[17px] z-10 relative">
            At{" "}
            <span className="text-[17px] md:text-[20px] font-semibold text-[#cfea00]">
              Mint Mini
            </span>
            , we build intelligent digital solutions — from AI-driven systems
            and scalable web/mobile apps to sleek UI/UX and strategic branding.
            Trusted by startups and growing businesses, our top-rated Fiverr
            team blends code, design, and strategy to elevate your digital
            presence.
          </p>

          {/* Grid for Feature Cards */}
          <div className=" z-10">
            <FeatureCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
