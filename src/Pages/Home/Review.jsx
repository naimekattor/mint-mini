import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "dina_c_woods",
    username: "@dina_c_woods",
    body: "What I love most? He makes every project feel effortless. After several collaborations, he’s become someone I fully trust to just get it right without handholding.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "jayfettig693",
    username: "@jayfettig693",
    body: "I've dealt with developers for years and was admittedly reluctant to deal with someone in the other side of the world, on different time zones, etc. I am so glad that I chose them and can't recommend them high enough. Fantastic.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "kyprianou",
    username: "@kyprianou",
    body: "Each project benefits from his unique blend of creativity and technical skill, resulting in sites that not only look fantastic but also perform flawlessly. His commitment and attention to detail always ensure the final product goes beyond what I imagined.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Hossian0",
    username: "@Hossian0",
    body: "This is not our first project together, and there’s a reason I came back Mohin and his team deliver. Every milestone is handled with care, creativity, and precision. We’re almost at the finish line, and I already know the outcome will be something to be proud of.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Ali_mounji",
    username: "@Ali_mounji",
    body: "Very satisfied with how professional and fast Mihads team is! Did a great piece of work in relatively short time.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Brixautogroup",
    username: "@Brixautogroup",
    body: "The website looks great and is responsive, the edits as we worked were not as good as expected. things got overlooked and I had to ask for fixes more than once. In the end it's all good.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Den_raz",
    username: "@Den_raz",
    body: "I took a chance hiring someone new, and I’m so glad I did. He delivered beyond what I asked for and made the whole process fun and stress-free. Super happy with how everything turned out!.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex items-center gap-2">
        <img
          className="rounded-full"
          width="32"
          height="32"
          alt={name}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white dark:text-gray-400">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white/70 dark:text-gray-300">
        {body}
      </blockquote>
    </figure>
  );
};

export function Reviews() {
  return (
    <div className="relative py-24 px-4 flex w-full flex-col items-center justify-center overflow-hidden bg-[#010231]">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(0,0,0,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.02)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#cfea00] via-[#0fdd33] to-[#339c45] text-transparent bg-clip-text dark:text-white mb-2">
          What Our Clients Say
        </h2>
        <p className="text-white dark:text-gray-400 text-lg">
          Real feedback from Fiverr clients we’ve helped succeed.
        </p>
      </div>

      <div className="relative z-10 w-full">
        <Marquee pauseOnHover className="[--duration:20s] mb-4">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        {/* Side Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 " />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 " />
      </div>
    </div>
  );
}
