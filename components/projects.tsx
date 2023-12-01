import React, { useRef } from 'react';
import SectionHeading from "./sections-heading";
import { projectsData } from '@/lib/data';
import Project from './project';


export default function Projects() {
  return (
    <section id="projects" className='scroll-mt-28'>
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

