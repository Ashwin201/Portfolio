"use client";
import React from "react";
import { motion } from "framer-motion";
const AnimatedText = (props) => {
  return (
    <div>
      <motion.h1
        className="text-center font-bold text-4xl min-[320px]:text-5xl sm:text-[55px] lg:text-[65px]"
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {props.text}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
