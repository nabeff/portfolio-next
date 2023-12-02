"use client";

import React, { useEffect, useRef } from 'react';
import SectionHeading from "./sections-heading";
import { projectsData } from '@/lib/data';
import Project from './project';
import { useSectionInView } from '@/lib/hooks';


export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);


  return (
    <section ref={ref} id="projects" className='scroll-mt-28 '>
         <SectionHeading>Projects</SectionHeading>
         <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          {
            projectsData.map((project, index) =>(
              <React.Fragment key={index}>
                <Project {...project}/>
              </React.Fragment>
            ))
          }
         </div>
    </section>
  );
}

