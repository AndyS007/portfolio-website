"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As a recent Information Technology graduate from The Hong Kong Polytechnic University, I am experienced in JavaScript, Python, Java, and C++. My specialties include full-stack development using React.js, Next.js, TypeScript, and Node.js. I'm skilled with SQL and NoSQL databases like MySQL, PostgreSQL, and MongoDB. I'm also comfortable with Linux command-line tools, Shell scripting, Docker, and CI/CD principles. My competence extends to Git collaborations, machine learning, blockchain technologies, along with a solid foundation in data structures, algorithms, OS, and networks.
      </p>
    </motion.section>
  );
}
