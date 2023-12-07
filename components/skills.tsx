"use client";

import React from "react";
import SectionHeading from "./sections-heading"
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="relative mb-28 mt-28  max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="relative  flex flex-wrap justify-center gap-2 text-lg text-gray-800 ">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 
             dark:bg-white/10 dark:text-white/80 cursor-pointer 
              transition "
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
      <div className="absolute top-1/2 left-1 transform blur-[14rem] -translate-x-1/2 
      -translate-y-1/2 bg-[#4aa302] rounded-full w-[13rem] h-[12rem] -z-10 dark:bg-[#ff0000]"></div>
      <div className="absolute top-1/2 right-1 transform blur-[13rem] -translate-x-1/2 
      -translate-y-1/2 rounded-full bg-[#e009e0] w-[10rem] h-[10rem] -z-10 dark:bg-[#e009e0] "></div>
    </section>
  );
}