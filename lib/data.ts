import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import playgroundImg from "@/public/playground.jpeg";
import exchangeImg from "@/public/echangep.jpeg";


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
    title: "National University of Defence Technology",
    location: "Changsha, China",
    description:
      "I completed my bachelor's degree in Mechanical Engineering and found my passion in computer science meanwhile.",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2020",
  },
  {
    title: "The Hong Kong Polytechnic University",
    location: "Hong Kong",
    description:
      "Graduated with a master's degree in Information Technology and started my career as a software engineer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
  {
    title: "Metamory",
    location: "Hong Kong",
    description:
      "I worked as a full-stack developer. My stack includes React, Next.js, TypeScript, Tailwind, and MongoDB.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Playground",
    description:
      "A forum app supporting posting, commenting, replying, and admin functionalities",
    tags: ["React", "Node.js", "MongoDB", "Express.js"],
    imageUrl: playgroundImg,
    url: "https://playground.hhhlx.com"
  },
  {
    title: "ExchangeP",
    description:
      "A MERN stack-based centralized cryptocurrency exchange",
    tags: ["React", "Node.js", "MongoDB", "Express.js"],
    imageUrl: exchangeImg,
    url: "https://exchange.hhhlx.com"
  }
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
  "Express.js",
  "Framer Motion",
  "C++",
  "Java",
  "Python",
] as const;
