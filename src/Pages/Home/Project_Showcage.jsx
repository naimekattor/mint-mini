import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ExternalLink,
  Github,
  Eye,
  Calendar,
  Users,
  Star,
  Filter,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Bowlers Network",
    description:
      "A platform for bowling enthusiasts: track performance, get expert coaching, exclusive content, and join a vibrant community.",
    longDescription:
      "Bowlers Network is a platform for bowling enthusiasts, offering advanced performance tracking, expert coaching, exclusive content, and a vibrant community. It provides tools to improve your game, connect with fellow bowlers, and track progress, making it the perfect space for players of all levels to elevate their skills.",
    image: "https://i.ibb.co/B5cgPSDc/Frame-48.png",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    liveUrl: "https://bowler-website-5j7q.vercel.app/ ",
    githubUrl: "https://github.com/",
    featured: true,
    date: "2024-01",
    team: "4 developers",
    status: "completed",
  },
  {
    id: 2,
    title: "Poop Alert",
    description:
      "A fun soundboard app with hilarious, toilet-themed sound effects for pranks and laughs.",
    longDescription:
      "Poop Alert is a lighthearted soundboard app packed with a variety of hilarious, toilet-themed sound effects. From flushing toilets to fart noises, it's designed to add a touch of humor to any situation. Whether you're pulling a prank, lightening the mood, or just looking for a good laugh, 'Poop Alert' has the perfect sound to keep things fun. Easy to use and perfect for any occasion!",
    image: "https://i.ibb.co/CKBnk1sm/Frame-49.png",
    category: "Data Science",
    technologies: ["Python", "React", "TensorFlow", "PostgreSQL", "D3.js"],
    liveUrl: "https://poop-alert.com/",
    githubUrl: "https://github.com/example",
    featured: true,
    date: "2024-02",
    team: "6 developers",
    status: "completed",
  },
  {
    id: 3,
    title: "MED WORLD",
    description:
      "A mobile app to help users manage and track their health information.",
    longDescription:
      " MED WORLD' APPEARS TO BE TO HELP USERS MANAGE AND TRACK THEIR HEALTH INFORMATION.",
    image: " https://i.ibb.co/Nn77JHWC/MED-WORLD.jpg",
    category: "Mobile Development",
    technologies: ["React Native", "Firebase", "Redux", "Node.js"],
    liveUrl: "https://mathaidetectives.com/",
    featured: false,
    date: "2023-12",
    team: "3 developers",
    status: "completed",
  },
  {
    id: 4,
    title: "Math Detectives",
    description:
      "AI-powered math education platform with a smart tutoring chatbot and instant feedback.",
    longDescription:
      "At Math Detectives, we're revolutionising math education with our AI-powered tutoring chatbot built on OpenAI's advanced O1 model. Our smart tutor delivers personalised, one-on-one support tailored to each student's learning style and pace. Students can tackle tough problems with step-by-step guidance, upload their work for instant feedback and error correction, and master complex concepts with access to a rich library of practice worksheets. Plus, our bonus feature allows students to upload handwritten math assignments for detailed solutions or clear explanations—just snap a photo and learn instantly.",
    image:
      " https://i.ibb.co/CpD9bYxj/Whats-App-Image-2025-07-30-at-2-57-14-PM-1.jpg",
    category: "Web Developement",
    technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
    liveUrl: "https://mathaidetectives.com/",
    githubUrl: "https://github.com/example",
    featured: true,
    date: "2024-03",
    team: "5 developers",
    status: "in-progress",
  },
  {
    id: 5,
    title: "VaznzaMyCost.it",
    description:
      "A travel and booking platform for planning and booking trips, flights, hotels, and more.",
    longDescription:
      "VaznzaMyCost.it is a comprehensive travel and booking platform that allows users to effortlessly plan and book their trips. From flights and hotels to car rentals and unique travel experiences, it offers a wide selection of options. With its easy-to-use interface and competitive prices.",
    image: "https://i.ibb.co/VYFJn1L8/Frame-50.png",
    category: "IoT",
    technologies: ["Arduino", "Raspberry Pi", "MQTT", "React", "Node.js"],
    liveUrl: "https://example.com",
    featured: false,
    date: "2023-11",
    team: "4 developers",
    status: "completed",
  },
  {
    id: 6,
    title: "AI PDF Transformer",
    description:
      "AI-powered tool for uploading, transforming, and enhancing PDF documents with a modern UI.",
    longDescription:
      "Al-powered PDF transformation, allowing users to upload and enhance documents. Its modern, user-friendly design features login, Al tools, reviews, FAQs, and a contact form, focusing on simplicity and advanced technology.",
    image:
      "https://i.ibb.co/W4j4F27m/Whats-App-Image-2025-07-30-at-2-57-14-PM.jpg",
    category: "AI/ML",
    technologies: ["Python", "OpenAI API", "React", "FastAPI", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: false,
    date: "2024-01",
    team: "3 developers",
    status: "completed",
  },
];

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "Data Science",
  "Blockchain",
  "IoT",
  "AI/ML",
];

const statusColors = {
  completed: "bg-green-100 text-green-800",
  "in-progress": "bg-yellow-100 text-yellow-800",
  planned: "bg-blue-100 text-blue-800",
};

export default function ProjectShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory
  );

  const featuredProjects = filteredProjects.filter(
    (project) => project.featured
  );
  const regularProjects = filteredProjects.filter(
    (project) => !project.featured
  );

  return (
    <div className="relative min-h-screen bg-[#010231] py-16">
      {/* Grid system background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(0,0,0,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.02)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#cfea00] via-[#0fdd33] to-[#339c45] text-transparent bg-clip-text mb-4">
            Project Showcase
          </h1>
          <p className="text-[17px] text-white max-w-3xl mx-auto">
            Explore our portfolio of innovative projects spanning web
            development, mobile apps, AI/ML, blockchain, and IoT solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Filter className="w-5 h-5 text-[#010231] mr-2 mt-2" />
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="mb-2 hover:bg-gradient-to-r from-[#cfea00] via-[#0fdd33] to-[#339c45]"
            >
              {category}
            </Button>
          ))}
        </div>

        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Star className="w-6 h-6 text-yellow-500 mr-2" />
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={setSelectedProject}
                  featured
                />
              ))}
            </div>
          </div>
        )}

        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-[#cfea00] via-[#0fdd33] to-[#339c45] text-transparent bg-clip-text mb-8 ">
            All Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={setSelectedProject}
              />
            ))}
          </div>
        </div>

        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent
            style={{
              maxWidth: "1200px",

              width: "80%",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-lg">
                    {selectedProject.description}
                  </DialogDescription>
                </DialogHeader>
                <div>
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-[500px] h-96 rounded-lg"
                  />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 mt-5">
                      Project Details
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 mt-5">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2 mt-5">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        {selectedProject.date}
                      </div>
                      {selectedProject.team && (
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="w-4 h-4 mr-2" />
                          {selectedProject.team}
                        </div>
                      )}
                      <Badge className={statusColors[selectedProject.status]}>
                        {selectedProject.status.replace("-", " ")}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    {selectedProject.liveUrl && (
                      <Button asChild>
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

function ProjectCard({ project, onSelect, featured = false }) {
  return (
    <Card
      className={`group hover:shadow-md transition-all duration-300 overflow-hidden ${
        featured ? "" : ""
      }`}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button
            onClick={() => onSelect(project)}
            variant="secondary"
            size="sm"
          >
            <Eye className="w-5 h-5 mr-2" />
            View Details
          </Button>
        </div>
        {featured && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-yellow-500 text-yellow-900">
              <Star className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <Badge className={statusColors[project.status]}>
            {project.status.replace("-", " ")}
          </Badge>
        </div>
      </div>
      <CardContent>
        <div className="mb-3">
          <Badge variant="outline" className="mb-2">
            {project.category}
          </Badge>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{project.technologies.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
