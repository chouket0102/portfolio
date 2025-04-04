"use client"

import { useState } from "react"
import Section from "./Section"
import { Github, ExternalLink, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  // Updated with the user's actual projects
  const projects = [
    {
      id: 1,
      title: "Virtual Interview Coach",
      description:
        "AI-powered interview preparation platform that provides personalized feedback, practice sessions, and coaching using advanced language models.",
      tags: ["Next.js","AI"],
      githubUrl: "https://github.com/chouket0102/virtual-interview",
      liveUrl: "",
      colorAccent: "from-emerald-500 to-teal-500",
    },
    {
      id: 2,
      title: "Patient Management System",
      description:
        "A Spring Boot-based Patient Management System that allows users to register and pick appointments. This system enables users to create an account, log in, and select available appointment slots with a doctor.",
      tags: ["React", "Firebase", "AI", "Serverless"],
      githubUrl: "https://github.com/chouket0102/patient-system",
      liveUrl: "",
      colorAccent: "from-blue-500 to-indigo-500",
    },
    {
      id: 3,
      title: "Serverless AI Agent",
      description:
        "Autonomous AI agent that performs tasks and solves problems without requiring dedicated server infrastructure, built with GROC architecture.",
      tags: ["GROC", "Serverless", "AI", "Cloud Functions"],
      githubUrl: "https://github.com/chouket0102/serverlessAI-agent",
      liveUrl: "https://serverless-ai-agent.vercel.app",
      colorAccent: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <Section className="overflow-hidden py-20" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my latest AI and software engineering innovations. Each project represents a unique challenge and
            solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative rounded-2xl overflow-hidden group border border-gray-800 hover:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Subtle gradient overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                style={{
                  background: `linear-gradient(to bottom right, rgba(0,0,0,0), rgba(0,0,0,0.2))`,
                }}
              />

              {/* Glowing border on hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0 bg-gradient-to-r ${project.colorAccent}`}
              />

              {/* Content */}
              <div className="relative z-20 p-8 h-full flex flex-col backdrop-blur-sm bg-black/20">
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs font-medium px-2.5 py-0.5 rounded-full bg-gradient-to-r ${project.colorAccent} bg-opacity-20 text-white`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>

                  <p className="text-gray-300 mb-6">{project.description}</p>
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-gradient-to-r ${project.colorAccent} text-white hover:shadow-lg transition-all duration-300 flex items-center gap-2`}
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <Github className="w-5 h-5" />
                    <span className="font-medium">Source Code</span>
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                    aria-label={`Visit ${project.title} live demo`}
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="font-medium">Live Demo</span>
                  </a>
                </div>

                {/* Animated Indicator */}
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute bottom-4 right-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`p-2 rounded-full bg-gradient-to-r ${project.colorAccent}`}>
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </Section>
  )
}

export default Projects

