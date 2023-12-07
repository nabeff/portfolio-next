"use client";

import React, { useEffect, useRef } from 'react';
import SectionHeading from "./sections-heading";
import { projectsData } from '@/lib/data';
import Project from './project';
import { useSectionInView } from '@/lib/hooks';


export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);


  return (
    <section ref={ref} id="projects" className='relative scroll-mt-28 '>
         <SectionHeading>Projects</SectionHeading>
         <div className=" relative grid grid-cols-1 gap-6 xl:grid-cols-2">
          {
            projectsData.map((project, index) =>(
              <React.Fragment key={index}>
                <Project {...project}/>
              </React.Fragment>
            ))
          }
         </div>    
      <div className="absolute top-1/2 left-1/2 transform blur-[13rem] -translate-x-1/2 
      -translate-y-1/2 bg-[#d00cf7] rounded-full w-[13rem] h-[13rem] -z-10 dark:bg-[#cea5fa] "></div>
    </section>
  );
}

