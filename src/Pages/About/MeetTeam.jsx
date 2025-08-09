import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MeetTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const teamMembers = [
    {
      name: "Hasibur Rahman Akash",
      role: "Frontend Developer",
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      image: "https://i.ibb.co/XrbpQf3J/3.png",
    },
    {
      name: "Md. Limon Islam",
      role: "Lead Developer",
      quote:
        "Our platform empowers teams to collaborate seamlessly and deliver projects faster than ever.",
      image: "https://i.ibb.co/fYKXcQhx/6.png",
    },
    {
      name: "Sithi Mollik Kotha",
      role: "Chief Marketing Officer",
      quote:
        "We focus on creating impactful strategies that drive growth and engagement for our clients.",
      image: "https://i.ibb.co/2YF49Bq4/2.png",
    },
    {
      name: "Shafiur Rahman",
      role: "UI/UX Designer",
      quote:
        "Designing intuitive interfaces that enhance user experience is my passion.",
      image: "https://i.ibb.co/cSRDnzMd/8.png",
    },
    {
      name: "1. Huzzatul Jannat Shethil",
      role: "Backend Engineer ",
      quote:
        "Building robust and scalable systems is key to our platform's success.",
      image: "https://i.ibb.co/MDTFJQ1N/1.png",
    },
    {
      name: "Akikul Islam",
      role: "Product Manager ",
      quote: "I ensure our products align with user needs and business goals.",
      image: "https://i.ibb.co/YFZLrt0G/7.png",
    },
    {
      name: "Mohammad Shahjahan",
      role: "Backend Developer",
      quote: "I ensure our products align with user needs and business goals.",
      image: "https://i.ibb.co/7tT7Cqvd/5.png",
    },
  ];

  useEffect(() => {
    let autoSlide;

    if (isImageLoaded) {
      autoSlide = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
        );
        setIsImageLoaded(false); // reset for next image
      }, 4000);
    }

    return () => clearInterval(autoSlide);
  }, [isImageLoaded, teamMembers.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
    setIsImageLoaded(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
    setIsImageLoaded(false);
  };

  const current = teamMembers[currentIndex];

  return (
    <div className="py-10">
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#cfea00] via-[#0fdd33] to-[#339c45] text-transparent bg-clip-text mb-4">
            Meet Our Team
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            Our team is dedicated to providing you with the best possible
            experience and support. We are here to help you every step of the
            way.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-4xl w-full">
            <div className="grid md:grid-cols-2 gap-8 items-end">
              <div className="relative flex flex-col items-end">
                <img
                  key={current.image}
                  src={current.image}
                  alt={current.name}
                  className={`w-4/5 p-2 h-[450px] object-center object-cover rounded-bl-[200px]  border transition-opacity duration-500 ${
                    isImageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setIsImageLoaded(true)}
                  loading="lazy"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {current.name}
                  </h3>
                  <p className="text-white">{current.role}</p>
                </div>
                <p className="text-white italic leading-relaxed">
                  {current.quote}
                </p>
                <div className="flex gap-2">
                  <Button
                    className="rounded-full bg-gray-900/80"
                    onClick={handlePrev}
                  >
                    <ChevronLeft size={32} />
                  </Button>
                  <Button
                    className="rounded-full bg-gray-900/80"
                    onClick={handleNext}
                  >
                    <ChevronRight size={32} />
                  </Button>
                </div>
              </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-4 me-[86px] space-x-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-gray-900" : "bg-gray-400"
                  }`}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsImageLoaded(false);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeetTeam;
