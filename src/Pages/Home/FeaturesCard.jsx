import { AiTwotoneSetting, AiTwotoneShopping } from "react-icons/ai";
import { BsPhone, BsCodeSlash } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { TbMessageChatbot, TbTools } from "react-icons/tb";

const services = [
  {
    title: "Web Development",
    description:
      "From sleek landing pages to robust web platforms, we craft responsive websites using the latest technologies like React, Next.js, and Node.js — optimized for performance, SEO, and user experience.",
    icon: <BsCodeSlash size={30} />,
  },
  {
    title: "UI/UX Design",
    description:
      "We blend creativity with usability to create clean, intuitive interfaces. From wireframes to final prototypes, we ensure your product looks great and feels natural across all devices.",
    icon: <FiFigma size={30} />,
  },
  {
    title: "App Development",
    description:
      "We design and develop high-quality mobile applications for both iOS and Android using Flutter and React Native — apps that are fast, secure, and user-friendly.",
    icon: <BsPhone size={28} />,
  },
  {
    title: "Artificial Intelligence (AI)",
    description:
      "From chatbots and recommendation engines to predictive analytics and neural networks, we build custom AI features tailored to solve your real-world problems.",
    icon: <TbMessageChatbot size={30} />,
  },
  {
    title: "E-commerce Solutions",
    description:
      "We create e-commerce platforms that drive sales — integrating secure payments, inventory systems, and modern UI to make your online store stand out.",
    icon: <AiTwotoneShopping size={30} />,
  },
  {
    title: "Custom Software Development",
    description:
      "We develop fully custom platforms, CRMs, admin panels, and automation tools designed around your exact workflow — helping you scale efficiently.",
    icon: <TbTools size={30} />,
  },
  {
    title: "Branding & Identity",
    description:
      "From logos to brand guidelines, we help define your visual identity to reflect your vision, stand out from competitors, and build trust with your audience.",
    icon: <HiOutlineLightBulb size={32} />,
  },
  {
    title: "Maintenance & Support",
    description:
      "We offer reliable post-launch support, security monitoring, bug fixing, and performance optimization so you can focus on growth, not glitches.",
    icon: <AiTwotoneSetting size={32} />,
  },
];

const FeatureCard = () => {
  return (
    <section className="pb-10 dark:bg-neutral-900 relative overflow-hidden">
      {/* Grid background pattern */}

      <div className="relative z-10 container mx-auto md:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => {
            const isTopRow = index < 4;
            const isBottomRow = index >= 4;

            return (
              <div
                key={service.title}
                className={`bg-white
    relative group cursor-pointer overflow-hidden p-6
    border border-neutral-200 dark:border-neutral-800
     
    hover:bg-gradient-to-r hover:from-[#cfea00]  hover:via-[#0fdd33] hover:to-[#339c45]
    transition-all duration-300
    ${isTopRow ? "border-t-0" : ""}
    ${isBottomRow ? "border-b-0" : ""}
  `}
              >
                {/* Left vertical line on hover */}
                <div className="absolute left-0 top-0 w-1 h-0 bg-neutral-800 dark:bg-neutral-200 group-hover:h-full transition-all duration-300"></div>

                {/* Light hover overlay */}
                <div className="absolute inset-0 bg-neutral-100 dark:bg-neutral-700 opacity-0  transition-opacity duration-300 pointer-events-none"></div>

                {/* Card Content */}
                <div className="relative z-20">
                  <div className="mb-4 text-neutral-800 dark:text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 text-[18px] dark:text-white transition duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
