import Section from "./Section"
import Heading from "./Heading"
import { check } from "../assets"

// Skills and education data
const skills = [
  "Data Engineering ",
  "Software Development",
  "Machine Learning",
  "Database Management",
  
]

const About = () => {
  return (
    <Section id="summary">
      <div className="container">
        <Heading title="About Me" text="Software Engineering student passionate about building scalable solutions" />

        <div className="relative">
          <div className="relative z-1 flex flex-col md:flex-row items-center h-auto mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20">
            <div className="w-full md:w-2/5 mb-8 md:mb-0">
              <img
                className="w-full h-auto object-cover rounded-xl"
                width={400}
                alt="Profile Photo"
                height={400}
                src="/profilepic.jpg"
              />
            </div>

            <div className="relative z-1 w-full md:w-3/5 md:pl-12">
              <h4 className="text-3xl font-bold mb-4">Yasser Chouket</h4>
              <p className="text-lg mb-6 text-gray-300">
                I'm a software engineering student at INSAT specializing in Data Engineering. With a passion for turning
                complex problems into scalable solutions, I combine technical expertise with creative problem-solving to
                build efficient and innovative applications.
              </p>

              <div className="mb-8">
                <h5 className="text-xl font-semibold mb-4">Education</h5>
                <div className="flex items-start py-3 border-t border-n-6">
                  <div className="flex-1">
                    <p className="font-medium">National Institute of Applied Science and Technology (INSAT)</p>
                    <p className="text-gray-400">Software Engineering</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400">2023 - Present</p>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="text-xl font-semibold mb-4">Skills</h5>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {skills.map((item, index) => (
                    <li key={index} className="flex items-start py-2">
                      <img width={24} height={24} src={check || "/placeholder.svg"} alt="check" className="mt-0.5" />
                      <p className="ml-4">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </Section>
  )
}

export default About

