import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import noteapp from "@/public/note-app.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web & App Developer | FreeLance",
    location: "Rabat",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
    
  },
  {
    title: "Front-End Developer",
    location: "Meknes",
    description:
      "I worked as a front-end developer for 1 year. I also upskilled to the full stack in the pas years.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
   
  },
  {
    title: "Bachelor Degree",
    location: "Rabat, PIIMT ",
    description:
      "I graduated after 3 years of studying computer engineering, I then started my master degree in Al Akhawayne university.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2022",
    
  },
] as const;

export const projectsData = [
  {
    title: "Mobile Shop",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["PHP", "HTML", "SCSS", "MySQL","TailWind"],
    linkUrl:"https://github.com/nabeff/ecom",
    imageUrl: corpcommentImg,
  },
  
  {
    title: "Movie Review",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "Java", "Spring Boot", "MongoDB"],
    linkUrl:"https://github.com/nabeff/movie-review",
    imageUrl: rmtdevImg,
  },
  
  {
    title: "Note App",
    description:"Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "JavaScript", "CSS"],
    linkUrl:"https://note-demoo.netlify.app/",
    imageUrl: noteapp,
  },
  {
    title: "Weather App",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "JavaScript", "HTML","Css"],
    linkUrl:"https://twitter-mini-clone-effina.netlify.app/sssssss",
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;