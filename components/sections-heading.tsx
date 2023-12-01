"use client"

import React from "react";
import { motion } from 'framer-motion';
type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
   
    <h2 className="text-3xl font-medium capitalize mb-4 text-center">
      {children}
    </h2>
    
    
  );
}