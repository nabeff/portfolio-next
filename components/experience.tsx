"use client";

import React, { useContext } from 'react'
import SectionHeading from './sections-heading';
import {
    VerticalTimeline,
    VerticalTimelineElement 
}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/theme-context';

export default function Experience() {
    const { ref } = useSectionInView("Experience");
    const {theme} = useTheme();

  return (
    <motion.section id='experience' 
    ref={ref}
    className='relative scroll-mt-28 mb-28   sm:mb-40'
    initial={{
        opacity:0
    }}

    whileInView={{
        opacity:1
    }}

    transition={{
        duration:1
    }}

    viewport={{
        once:true
    }}>
        
        <SectionHeading>My Experience</SectionHeading>
        <div>
        {
            experiencesData.map((item, index) => (
                <React.Fragment key={index} >
                <VerticalTimelineElement 
                
                    
                contentStyle={{
                    background:
                      theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                    boxShadow: "none",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    textAlign: "left",
                    padding: "1.3rem 2rem",
                    maxWidth:"650px"
                  }}
                  contentArrowStyle={{
                    borderRight:
                      theme === "light"
                        ? "0.4rem solid #9ca3af"
                        : "0.4rem solid rgba(255, 255, 255, 0.5)",
                  }}
                  date={item.date}
                  icon={item.icon}
                  iconStyle={{
                    background:
                      theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                    fontSize: "1.5rem",
                  }}>
                    <h3 className='font-semibold capitalize '>{item.title}</h3>
                    <p className="font-normal !mt-0">{item.location}</p>
                    <p className='text-gray-700 dark:text-white/60'>{item.description}</p>
                    
                    
                </VerticalTimelineElement>
                    </React.Fragment>
                ))
            }
        </div>
        <div className="absolute top-1/2 left-1 transform blur-[16rem] -translate-x-1/2 
      -translate-y-1/2 bg-[#860abf] rounded-full w-[15rem] h-[15rem] -z-10 dark:bg-[#860abf] "></div>
      <div className="absolute top-1/2 right-2 transform blur-[14rem] -translate-x-1/2 
      -translate-y-1/2 bg-[#000594] rounded-full w-[13rem] h-[12rem] -z-10 dark:bg-[#000594]"></div>
        
    </motion.section>
        )
}
