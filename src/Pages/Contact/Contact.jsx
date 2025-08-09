import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  MessageSquareMore,
} from "lucide-react";
import { Link } from "react-router";
import { FaLinkedinIn } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="relative min-h-screen py-16 px-4 bg-[#010231] dark:bg-black overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" />

      <div className="relative z-10 container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#cfea00] via-[#0fdd33] to-[#339c45] text-transparent bg-clip-text dark:text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-white dark:text-gray-300 max-w-2xl mx-auto">
            Ready to start your project? We're here to help bring your ideas to
            life. Contact us today for a free consultation.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 shadow-lg text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-gray-200 dark:bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-black dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-[18px] text-gray-900 dark:text-white mb-2">
                Email Us
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Send us a message anytime
              </p>
              <a
                href="mailto:miintminii@gmail.com"
                className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
              >
                miintminii@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 shadow-lg text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-gray-200 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-black dark:text-green-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-[18px]">
                Call Us
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Mon-Fri 9AM-6PM EST
              </p>
              <a
                href="tel:+1234567890"
                className="text-green-600 dark:text-green-400 text-sm font-medium hover:underline"
              >
                +8801896 088 680
              </a>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 shadow-lg text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-gray-200 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLinkedinIn className="w-6 h-6 text-black dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-[18px]">
                Follow Us
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Book an appoinment
              </p>
              <button className="text-purple-600 dark:text-purple-400 text-sm font-medium hover:underline">
                <Link to={"https://www.linkedin.com/in/mohin-uddin00/"}>
                  LinkedIn
                </Link>
              </button>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 shadow-lg text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-gray-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-black dark:text-orange-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-[18px]">
                Response Time
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                We reply within
              </p>
              <span className="text-orange-600 dark:text-orange-400 text-sm font-medium">
                24 hours
              </span>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* FAQ Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#cfea00] via-[#0fdd33] to-[#339c45] text-transparent bg-clip-text dark:text-white mb-6">
              Frequently Asked Questions
            </h2>

            <Accordion
              type="multiple"
              className="w-full divide-y divide-gray-200 dark:divide-gray-800 border-b border-gray-200 dark:border-gray-800 rounded-md overflow-hidden"
            >
              {[
                {
                  q: "Do you provide deep communication during development?",
                  a: "Yes, we prioritize transparency and ongoing communication through Fiverrs messaging tools, ensuring you're updated at every step.",
                },
                {
                  q: "Will I get day-to-day updates?",
                  a: "Absolutely. Our clients receive consistent updates and progress reports through Fiverr chat to stay in sync with development milestones.",
                },
                {
                  q: "Can I collaborate with your dev team on research?",
                  a: "Yes! We encourage collaboration to ensure the best outcome. Your vision is refined through real discussions with our dev team.",
                },
                {
                  q: "What services do you offer?",
                  a: "We specialize in Web Development, AI Custom Models, and Mobile App Development — all delivered with excellence on Fiverr.",
                },
                {
                  q: "How long does a typical project take?",
                  a: "Project timelines vary based on complexity. Simple websites take 1-2 weeks, while complex applications can take 4-8 weeks. We provide detailed timelines during consultation.",
                },
                {
                  q: "Do you offer post-launch support?",
                  a: "Yes, we provide ongoing support and maintenance packages to ensure your project continues to perform optimally after launch.",
                },
              ].map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-lg font-medium text-white dark:text-gray-100 px-4 py-3">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-white dark:text-gray-400 px-4 pb-4">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact Form & Fiverr Promotion */}
          <div className="space-y-6">
            {/* Quick Contact Form */}
            <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white flex items-center gap-2 ">
                  <Send className="w-6 h-6 " />
                  Quick Contact
                </CardTitle>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Send us a message and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Project Type (Web Dev, Mobile App, AI, etc.)"
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
                <button className='"w-full text-lg font-medium flex justify-center gap-2 mt-2  text-[#010231]] w-3/5 py-[6px] rounded-md mx-auto bg-gradient-to-r from-[#cfea00] via-[#0fdd33] to-[#339c45]'>
                  Contact
                </button>
              </CardContent>
            </Card>

            {/* Fiverr Promotion Card */}
            <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">
                  Work With Us on Fiverr
                </CardTitle>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  We're trusted professionals on Fiverr. From building your web
                  app to crafting AI models — we deliver high-performance
                  digital solutions.
                </p>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  className="w-full text-lg font-medium flex justify-center gap-2 mt-2"
                  variant="default"
                >
                  <a
                    href="https://www.fiverr.com/mint_mini"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Our Fiverr Profile
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </Button>

                <div className="mt-6 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <p>✔️ 100% Client Satisfaction</p>
                  <p>✔️ Daily Updates & Open Communication</p>
                  <p>✔️ Web, AI, Mobile App Expertise</p>
                </div>

                {/* Testimonial Snippet */}
                <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
                  <blockquote className="text-sm italic text-gray-500 dark:text-gray-400">
                    "The team exceeded our expectations. We felt supported from
                    day one through final delivery." —{" "}
                    <strong>Verified Fiverr Client</strong>
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
