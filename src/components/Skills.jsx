import React from 'react';
import Heading from "./Heading";
import Section from "./Section";

const skillSets = {
  backend: {
    title: "Backend Technologies",
    skills: [
      {
        id: "0",
        title: "Core Languages",
        items: ["Python", "JavaScript", "Java", "PHP"]
      },
      {
        id: "1",
        title: "Frameworks",
        items: ["Django", "Express.js", "Spring Boot", "Flask"]
      },
      {
        id: "2",
        title: "Databases & Tools",
        items: ["PostgreSQL",  "MySQL","MongoDB", "AWS"]
      }
    ]
  },
  frontend: {
    title: "Frontend Technologies",
    skills: [
      {
        id: "0",
        title: "Core Technologies",
        items: ["HTML5", "CSS3", "JavaScript", "TypeScript"]
      },
      {
        id: "1",
        title: "Frameworks & Libraries",
        items: ["React.js",  "Next.js", "Angular"]
      },
      {
        id: "2",
        title: "Tools & Design",
        items: ["Tailwind", "Bootstrap",  "Vite", "Figma"]
      }
    ]
  },
  aiData: {
    title: "AI & Data Technologies",
    skills: [
      {
        id: "0",
        title: "AI & ML",
        items: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV"]
      },
      {
        id: "1",
        title: "Data Science",
        items: ["Python",  "Pandas", "NumPy", "SciPy", "Matplotlib"]
      },
      {
        id: "2",
        title: "Tools",
        items: ["Tableau", "Power BI", "Jupyter"]
      }
    ]
  }
};

const Skills = ({ skillType }) => {
  const { title, skills } = skillSets[skillType];

  return (
    <Section id="skills">
      <div className="container relative z-2 mt-2">
        <Heading 
          className="md:max-w-md lg:max-w-2xl text-gray-500" 
          title={title} 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((category) => (
            <div
              key={category.id}
              className="bg-n-8 rounded-2xl p-8 flex flex-col h-full border border-n-6 hover:border-n-5 transition-colors"
            >
              <h5 className="h5 mb-5 text-center">{category.title}</h5>
              <ul className="list-none space-y-3 text-n-3">
                {category.items.map((item, index) => (
                  <li 
                    key={index}
                    className="text-center font-light"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;