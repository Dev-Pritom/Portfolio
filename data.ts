import {
  Briefcase,
  Cloud,
  Code2,
  Coffee,
  Database,
  GitBranch,
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
  DatabaseIcon,
  Terminal,
  KeyIcon,
  CreditCard,
  KeyRound
} from "lucide-react";

import { FaGithub, FaFacebook, FaLinkedin, FaLinkedinIn,FaTwitter, FaInstagram} from "react-icons/fa6";

export const stats = [
  { label: "Years Experience", value: "1" },
  { label: "Projects Completed", value: "15+" },
  
];

export const highlights = [
  { icon: MapPin, text: "Based in Sitakunda,Chattogram" },
  { icon: Briefcase, text: "Open for freelance work" },
  { icon: GraduationCap, text: "CSE Graduate from International Islamic University Chittagong" },
  { icon: Coffee, text: "Powered by coffee & curiosity" },
];

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "pritomsaha480@gmail.com",
    href: "mailto:pritomsaha480@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+88 0164715821",
    href: "tel:01647158216",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sitakunda, Chattogram",
    href: "#",
  },
];

export const socialLinks = [
  { icon: FaGithub, href: "https://github.com/Dev-Pritom", label: "GitHub" },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/pritom-saha-5b4a0a1b7?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    label: "LinkedIn",
  },
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/pritom480",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/pritomsaha_antu?stkn=ZmJ0N21pa2szM25m",
    label: "Instagram",
  },
];

export const experiences = [
  {
    type: "work",
    title: "Full-Stack Developer",

    period: "Present",
    description:
      "Built and maintained multiple web applications. Collaborated with design team to implement responsive UIs.",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
  },

  {
    type: "education",
    title: "Bachelor of Computer Science",
    company: "International Islamic University Chittagong",
    period: "2018 - 2022",
    description:
      "Completed Bachelor of Science in Computer Science & Engineering with CGPA 3.43 in scale of 4. Obtained Strong fundation in algorithms, data structures, and software engineering principles.",
    technologies: ["Computer Science", "Mathematics", "Problem Solving"],
  },
  {
    type: "work",
    title: "Higher Secondary Certificate",
    company: "Chittagong Ideal College",
    period: "2016-2017",
    description:
      "Completed Higher Secondary School Certificate Examination with GPA:3.67",
    technologies: ["JavaScript", "PHP", "MySQL", "WordPress"],
  },
  {
    type: "education",
    title: "SSC",
    company: "Jafar Nagar Aparna Charan High School",
    period: "2014-2015",
    description:
      "Completed Secondary School Certificate Examination with GPA: 4.94",
    technologies: ["Research", "AI/ML", "Distributed Systems"],
  },
];

export const footerSocialLinks = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    image: "/images/p1.jpg",
    techStack: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Daily Notes Management App",
    description:
      "Collaborative project management tool with real-time updates, Kanban boards, and team analytics.",
    image: "/images/p2.jpg",
    techStack: ["NextJs", "Node.js", "Tailwind", "MongoDB"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "AI Content Generator",
    description:
      "GPT-powered content creation platform for marketers with templates and workflow automation.",
    image: "/images/p3.jpg",
    techStack: ["React", "Python", "OpenAI", "FastAPI"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Real Estate Platform",
    description:
      "Property listing platform with virtual tours, mortgage calculator, and agent booking system.",
    image: "/images/p4.jpg",
    techStack: ["Vue.js", "Node.js", "MongoDB", "Maps API"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Fitness Tracker",
    description:
      "Cross-platform mobile app for workout tracking, nutrition logging, and progress analytics.",
    image: "/images/p5.jpg",
    techStack: ["React Native", "Firebase", "Node.js", "Charts"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Learning Management System",
    description:
      "Educational platform with video streaming, quizzes, progress tracking, and certificates.",
    image: "/images/p6.jpg",
    techStack: ["Next.js", "Prisma", "AWS S3", "Stripe"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: Code2 },
      { name: "Next.js", icon: Globe },
      { name: "TypeScript", icon: Terminal },
      { name: "Tailwind CSS", icon: Palette },
      { name: "Html", icon: Smartphone },
      { name: "Javascript", icon: Layout },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Layers },
      { name: "MongoDB", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "Prisma", icon: DatabaseIcon },
      { name: "REST APIs", icon: Cloud },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "BetterAuth", icon: KeyIcon },
      { name: "Stripe", icon: CreditCard },
      { name: "Linux", icon: Terminal },
      { name: "Figma", icon: Palette },
      { name: "Clerk", icon: KeyRound },
    ],
  },
];
