"use client";

import React from "react";
import SectionHeading from "./sections-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="relative mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <div className="mt-10"><p className=" text-gray-700 -mt-6 dark:text-white/90">
        Please contact me directly at{" "}
        <a className="underline font-bold" href="mailto:example@gmail.com">
          neffina8@gmail.com
        </a>{" "}
        or through this form.
      </p></div>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg 
          borderBlack dark:bg-white/20 dark:bg-opacity-80 
          dark:focus:bg-opacity-90 transition-all  dark:outline-none bg:placeholder:text-gray-900/80 text-gray-900
          dark:placeholder:text-white/80 dark:text-white/90"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
        
          className="h-52 my-3 rounded-lg borderBlack p-4
          dark:bg-white/20 dark:bg-opacity-80 
           dark:focus:bg-opacity-90 transition-all dark:outline-none
           bg:placeholder:text-gray-900/80 text-gray-900
           dark:placeholder:text-white/80 dark:text-white/90"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
         
          
        />
        <SubmitBtn />
      </form>
      <div className="absolute top-1/2 left-1 transform blur-[13rem] -translate-x-1/2 
      -translate-y-1/2 rounded-full bg-[#0926e0]  w-[13rem] h-[13rem] -z-10 dark:bg-[#540094] "></div>
      <div className="absolute top-1/2 left-1/2 transform blur-[13rem] -translate-x-1/2 
      -translate-y-1/2 rounded-full bg-[#00ba9e]  w-[13rem] h-[13rem] -z-10 dark:bg-[#e00966] "></div>
    </motion.section>
  );
}