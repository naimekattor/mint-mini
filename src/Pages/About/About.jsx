import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Zap, Clock, Building2 } from "lucide-react";
import { LuBrain } from "react-icons/lu";
import { MdOutlineLock } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import MeetTeam from "./MeetTeam";

export default function About() {
  const [openFaq, setOpenFaq] = useState(null);

  const features = [
    {
      icon: BarChart3,
      title: "High Performance & Reliability",
      description:
        "Optimized software architecture ensures fast load times, minimal downtime, and smooth user experiences.",
      color: "bg-gray-100",
      iconColor: "text-gray-900",
    },
    {
      icon: Zap,
      title: "Scalable Software Solutions",
      description:
        "Our products grow with your business — built to scale and adapt as your needs expand.",
      color: "bg-gray-100",
      iconColor: "text-gray-900",
    },
    {
      icon: LuBrain,
      title: "Smart Innovation",
      description:
        "We integrate the latest technologies to keep you ahead of the competition.",
      badge: "Reliable",
      badgeColor: "bg-blue-100 text-blue-700",
      color: "bg-gray-100",
      iconColor: "text-gray-900",
    },
    {
      icon: BiDollar,
      title: "Best Price Guarantee",
      description:
        "Our pricing is transparent, fair, and built to deliver maximum value for your investment. If you find a better offer with the same quality and scope, we’ll match it.",
      badge: "Trustworthy",
      badgeColor: "bg-green-100 text-green-700",
      color: "bg-gray-100",
      iconColor: "text-gray-900",
    },
    {
      icon: Clock,
      title: "24/7 Customer Support",
      description:
        "Our dedicated team is always available via chat, email, or phone to resolve issues quickly.",
      badge: "Essential",
      badgeColor: "bg-orange-100 text-orange-700",
      color: "bg-gray-100",
      iconColor: "text-gray-900",
    },
    {
      icon: MdOutlineLock,
      title: "Security-First Approach",
      description:
        "We implement industry-best practices to keep your data and operations safe and compliant.",
      color: "bg-gray-100",
      iconColor: "text-gray-900",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#010231] overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] pointer-events-none"></div>

      {/* Floating Dots for Decoration */}
      <div className="absolute top-10 left-20 w-4 h-4 bg-purple-400 rounded-full opacity-60 z-10"></div>
      <div className="absolute top-32 right-32 w-3 h-3 bg-purple-500 rounded-full opacity-40 z-10"></div>
      <div className="absolute top-20 right-20 w-2 h-2 bg-purple-300 rounded-full opacity-50 z-10"></div>
      <div className="absolute top-96 left-10 w-3 h-3 bg-purple-400 rounded-full opacity-30 z-10"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* About Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r from-[#cfea00] via-[#0fdd33] to-[#339c45] text-transparent bg-clip-text">
              About Us
            </h2>
            <p className="text-white text-[17px] max-w-3xl mx-auto">
              At{" "}
              <span className="text-[20px] font-semibold text-[#cfea00]">
                Mint Mini
              </span>
              , we go beyond just writing code — we build powerful digital
              solutions that drive real business results. Whether you're a
              startup, enterprise, or growing brand, our team is committed to
              delivering innovation, performance, and value at every step.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-md hover:bg-gradient-to-r from-[#cfea00] via-[#0fdd33] to-[#339c45] transition-shadow group"
              >
                <CardContent className="p-0">
                  <div
                    className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}
                  >
                    <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="font-semibold text-[20px] text-gray-900 mb-2 group-hover:text-[#010231]">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 group-hover:text-[#010231]">
                    {feature.description}
                  </p>
                  {feature.badge && (
                    <Badge className={`${feature.badgeColor} border-0`}>
                      {feature.badge}
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}

            {/* Final Custom Card */}
            <Card className="p-6 col-span-1 md:col-span-2 lg:col-span-1 hover:bg-gradient-to-r from-[#cfea00] via-[#0fdd33] to-[#339c45] group">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="font-semibold text-[20px] text-gray-900 mb-2 group-hover:text-[#010231]">
                  Custom-Built for You
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-[#010231]">
                  Every project is tailored to your exact requirements — no
                  generic templates, just results.
                </p>
                <div className="flex items-center mt-3 text-sm text-purple-600">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                  <span>Best Service</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <MeetTeam />
      </div>
    </div>
  );
}
