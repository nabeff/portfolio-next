"use client";

import React from "react";
import SectionHeading from "./sections-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="relative mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 dark:text-white/70">
        After graduating with a degree in{" "}
        <span className="dark:text-white/90 font-bold">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="dark:text-white/90 font-bold">full-stack web development</span>.{" "}
        <span className="italic dark:text-white/90 font-bold">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline dark:text-white/90 font-bold">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="dark:text-white/90 font-bold">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="dark:text-white/90 font-bold">full-time position</span> as a software
        developer.
      </p>

      <p className="dark:text-white/70">
        <span className="italic dark:text-white/90 font-bold">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="dark:text-white/90 font-bold">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium dark:text-white/90">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
      <div className="absolute top-1/2 left-1/2 transform blur-[13rem] -translate-x-1/2 
      -translate-y-1/2 bg-[#ff0000] rounded-full w-[13rem] h-[13rem] -z-10 dark:bg-[#ff0000] "></div>
      
    </motion.section>
  );
}


