import { Github } from "lucide-react"
import Section from "./Section"
import Heading from "./Heading"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Sample projects data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "Big Data Analytics Platform",
    description:
      "A scalable data processing platform using Apache Spark, Kafka, and Hadoop to analyze large datasets in real-time.",
    image: "/placeholder.svg?height=426&width=628",
    technologies: ["Apache Spark", "Kafka", "Hadoop", "Python"],
    githubUrl: "https://github.com/username/big-data-platform",
    status: "completed",
    date: "2023",
  },
  {
    id: 2,
    title: "Machine Learning Pipeline",
    description: "End-to-end ML pipeline for predictive maintenance with automated model training and deployment.",
    image: "/placeholder.svg?height=426&width=628",
    technologies: ["TensorFlow", "Docker", "Flask", "MongoDB"],
    githubUrl: "https://github.com/username/ml-pipeline",
    status: "completed",
    date: "2023",
  },
  {
    id: 3,
    title: "Data Visualization Dashboard",
    description:
      "Interactive dashboard for visualizing complex datasets with real-time filtering and analysis capabilities.",
    image: "/placeholder.svg?height=426&width=628",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/username/data-viz-dashboard",
    status: "completed",
    date: "2022",
  },
  {
    id: 4,
    title: "ETL Framework",
    description:
      "Customizable ETL framework for data integration across multiple sources with error handling and monitoring.",
    image: "/placeholder.svg?height=426&width=628",
    technologies: ["Python", "Airflow", "SQL", "AWS"],
    githubUrl: "https://github.com/username/etl-framework",
    status: "in-progress",
    date: "2024",
  },
]

const Projects = () => (
  <Section id="projects">
    <div className="container mx-auto px-4">
      <Heading
        tag="Portfolio"
        title="My Projects"
        text="Showcasing my work in data engineering and software development"
      />

      <div className="relative grid gap-6 md:grid-cols-2 lg:gap-8">
        {projects.map((project) => (
          <div
            className={cn(
              "p-0.5 rounded-2xl",
              project.status === "completed"
                ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                : "bg-gradient-to-br from-amber-500/20 to-orange-500/20",
            )}
            key={project.id}
          >
            <div className="relative p-6 bg-gray-900 rounded-2xl h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 text-sm font-medium bg-gray-800 rounded-full">{project.date}</span>

                <div
                  className={cn(
                    "flex items-center px-3 py-1 rounded text-sm font-medium",
                    project.status === "completed"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-amber-500/20 text-amber-400",
                  )}
                >
                  <div className="flex items-center">
                    {project.status === "completed" ? (
                      <>
                        <svg
                          className="w-4 h-4 mr-1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 13L9 17L19 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Completed
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-4 h-4 mr-1.5 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray="32"
                            strokeDashoffset="32"
                          />
                        </svg>
                        In Progress
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="mb-5 -mx-6 overflow-hidden">
                <img
                  className="w-full h-48 object-cover"
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                />
              </div>

              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 text-xs font-medium bg-gray-800 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
)

export default Projects

