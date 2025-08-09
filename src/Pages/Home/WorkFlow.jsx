import { RetroGridDemo } from "../../Elements/WorkFlow/RetroGridDemo";
import { Technology } from "../../Elements/WorkFlow/Technology";

const WorkFlow = () => {
  return (
    <section className="md:py-20 py-10 bg-[#010231]">
      <div>
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-3 bg-gradient-to-r from-[#cfea00] via-[#0fdd33] to-[#339c45] text-transparent bg-clip-text">
          How We Build Success
        </h1>
        <p className=" text-center leading-none text-[17px] tracking-tight md:max-w-[700px] w-11/12 mx-auto pb-1 text-white">
          We follow a structured process — starting with deep research and
          planning, then moving through design, development, testing, and
          deployment — ensuring every phase is aligned with your goals and
          delivers real value.
        </p>

        <div className="md:pt-10">
          <RetroGridDemo />
        </div>

        <Technology />
      </div>
    </section>
  );
};

export default WorkFlow;
