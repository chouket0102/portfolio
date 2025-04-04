import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";
import { Linkedin, Github, Facebook, Instagram } from 'lucide-react';

export const socials = [
  {
    id: "0",
    title: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/yasser-chouket-9b15b8285/",
  },
  {
    id: "1",
    title: "GitHub",
    icon: Github,
    url: "https://github.com/chouket0102",
  },
  {
    id: "2",
    title: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/yasser.chouket.1",
  },
 ,
];
export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#home",
  },
  {
    id: "1",
    title: "Summary",
    url: "#summary",
  },
  {
    id: "2",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "3",
    title: "Skills",
    url: "#skills",
  },
  {
    id:"4",
    title:"Contact",
    url:"#contact"
  }
  
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Web Development",
  "Data & ML",
  "AI Agents",
  
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Patient Managment System",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "Spring Boot | React | PostgreSQL",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "AI Travel Planner",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "React | FireBase",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Multi Agents",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "RAG | Python",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];
export const benefits = [ { id: "0", title: "Ask anything", text: "Lets users quickly find answers to their questions without having to search through multiple sources.", backgroundUrl: "./src/assets/benefits/card-1.svg", iconUrl: benefitIcon1, imageUrl: benefitImage2, }, { id: "1", title: "Improve everyday", text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.", backgroundUrl: "./src/assets/benefits/card-2.svg", iconUrl: benefitIcon2, imageUrl: benefitImage2, light: true, }, { id: "2", title: "Connect everywhere", text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.", backgroundUrl: "./src/assets/benefits/card-3.svg", iconUrl: benefitIcon3, imageUrl: benefitImage2, }, { id: "3", title: "Fast responding", text: "Lets users quickly find answers to their questions without having to search through multiple sources.", backgroundUrl: "./src/assets/benefits/card-4.svg", iconUrl: benefitIcon4, imageUrl: benefitImage2, light: true, }, { id: "4", title: "Ask anything", text: "Lets users quickly find answers to their questions without having to search through multiple sources.", backgroundUrl: "./src/assets/benefits/card-5.svg", iconUrl: benefitIcon1, imageUrl: benefitImage2, }, { id: "5", title: "Improve everyday", text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.", backgroundUrl: "./src/assets/benefits/card-6.svg", iconUrl: benefitIcon2, imageUrl: benefitImage2, }, ];



