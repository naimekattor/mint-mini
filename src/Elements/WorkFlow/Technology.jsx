import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiSvelte,
  SiTailwindcss,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiRedis,
  SiJest,
  SiCypress,
  SiGraphql,
  SiVercel,
  SiNetlify,
  SiGithub,
  SiDocker,
  SiPostman,
  SiWordpress,
  SiShopify,
} from "react-icons/si";

const webTechnologies = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Vue.js", icon: SiVuedotjs },
  { name: "Svelte", icon: SiSvelte },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Sass/SCSS", icon: SiSass },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "Python", icon: SiPython },
  { name: "Django", icon: SiDjango },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Firebase", icon: SiFirebase },
  { name: "GraphQL", icon: SiGraphql },
  { name: "Vercel", icon: SiVercel },
  { name: "Netlify", icon: SiNetlify },
  { name: "GitHub", icon: SiGithub },
  { name: "Docker", icon: SiDocker },
  { name: "Postman", icon: SiPostman },
];

const firstRow = webTechnologies.slice(0, webTechnologies.length / 2);
const secondRow = webTechnologies.slice(webTechnologies.length / 2);

function ReviewCard({ icon: Icon, name }) {
  return (
    <figure
      className={cn(
        "relative h-full w-52 cursor-pointer overflow-hidden rounded-sm border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gradient-to-r from-[#cfea00] via-[#0fdd33] to-[#339c45]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex items-center gap-2">
        <Icon className="text-2xl md:text-5xl text-white" />
        <figcaption className="text-lg font-medium text-white">
          {name}
        </figcaption>
      </div>
    </figure>
  );
}

export function Technology() {
  return (
    <div className="md:py-10 relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((tech) => (
          <ReviewCard key={tech.name} {...tech} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((tech) => (
          <ReviewCard key={tech.name} {...tech} />
        ))}
      </Marquee>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 md:w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div> */}
    </div>
  );
}
