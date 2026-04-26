import {
  Briefcase,
  Cloud,
  Code2,
  Coffee,
  Cpu,
  Database,
  Github,
  Globe,
  GraduationCap,
  Layers,
  Layout,
  Mail,
  MapPin,
  Palette,
  Phone,
  Server,
  Smartphone,
  Terminal,
} from "lucide-react";

import { FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa6";


export const highlights = [
  { icon: MapPin, text: "Based in San Francisco, CA" },
  { icon: Briefcase, text: "Open for freelance work" },
  { icon: GraduationCap, text: "CS Graduate from Stanford" },
  { icon: Coffee, text: "Powered by coffee & curiosity" },
];

export const userReviewData = [
  {
    id: 1,
    name: "John Doe",
    profession: "Real Estate Agent",
    userImage: "/images/propease.PNG",
    review:
      "A wonderful experience! The platform made it easy to find exactly what I needed. lorem ipsum dolor sit ame",
  },
  {
    id: 2,
    name: "Mike Smith",
    profession: "Business Owner",
    userImage: "/images/marathon.PNG",
    review:
      "Great selection of properties and seamless process. Highly recommended for anyone looking to invest.",
  },
  {
    id: 3,
    name: "Alex Johnson",
    profession: "Web developer",
    userImage: "/images/u3.jpg",
    review:
      "The website helped me find my dream home quickly and hassle-free. Exceptional service!",
  },
  {
    id: 4,
    name: "Emily Clark",
    profession: "Interior Designer",
    userImage: "/images/u4.jpg",
    review:
      "Fantastic range of properties with clear details. The best platform for home and design inspiration!",
  },
];

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ayashakhatun004@gmail.com",
    href: "mailto:ayashakhatun004@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1604532776",
    href: "tel:+880 1604532776",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: "#",
  },
];

export const experiences = [
  
  
  {
    type: "education",
    title: "Diploma in Computer Science",
    company: "Dhaka Mohila Polytechnic Institute",
    period: "2020-2025",
    description:
     "Strong foundation in algorithms, data structures, and software engineering principles.",
    technologies: ["Computer Science", "Mathematics", "Problem Solving"],
  }, 
  {
    type: "education",
    title: "Secondary School Certificate",
    company: "Pathra United High School",
    period: "2020",
    description:
      "This is a board exam in Bangladesh taken after class 10 to evaluate secondary level education.",
    technologies: ["Computer Science", "Mathematics", "Problem Solving"],
  },
];

export const socialLinks = [
  { icon: FaGithub, href: "https://github.com/ayasha-khatun", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
];


export const footerSocialLinks = [
  { icon: FaGithub, href: "https://github.com/ayasha-khatun", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:ayashakhatun004@gmail.com", label: "Email" },
];

export const projects = [
  {
    title: "Real Estate Platform",
    description:
      "A full-stack real estate platform allowing agents to list properties, manage offers, and complete secure transactions.",
    image: "/images/propease.PNG",
    techStack: ["React", "Node.js", "Express", "MongoDB","JWT"," Tailwind CSS"],
    demoUrl: "https://propease-baa74.web.app/",
    githubUrl: "https://github.com/ayasha-khatun/propease_repo",
  },
  {
    title: "Marathon Management System",
    description:
      "A platform to manage marathons create, register, and monitor events. Features include authentication, registration tracking, and dashboards for users and admins.",
    image: "/images/marathon.PNG",
    techStack: ["React", "Node.js", "Express", "MongoDB","JWT"," Tailwind CSS"],
    demoUrl: "https://marathon-management-syst-38d0d.web.app/",
    githubUrl: "https://github.com/ayasha-khatun/marathon_repo",
  },
  {
    title: "Recipe Book App",
    description:
      "A recipe management app where users can add, edit, like, and view their favorite recipes.",
    image: "/images/recipebook.PNG",
    techStack: ["React", "Firebase Auth", "MongoDB"," Tailwind CSS"],
    demoUrl: "https://recipe-book-app-58c35.web.app/",
    githubUrl: "https://github.com/ayasha-khatun/recipe_book",
  },
  
  
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: Code2 },
      { name: "Next.js", icon: Globe },
      { name: "TypeScript", icon: Terminal },
      { name: "Javascript", icon: Smartphone },
      { name: "Tailwind CSS", icon: Palette },
      { name: "Bootstrap", icon: Layout },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Layers },
      { name: "MongoDB", icon: Database },
      { name: "Firebase", icon: Database },
      { name: "REST APIs", icon: Cloud },
      { name: "JWT Token", icon: Cpu },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Github", icon: Github },
      { name: "Figma", icon: Palette },
      { name: "Chrome DevTools", icon: Server },
      { name: "AWS", icon: Cloud },
      { name: "Vercel", icon: Terminal },
      { name: "Netlify", icon: Cpu },
    ],
  },
];