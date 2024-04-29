"use client";

import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

const variants = {
  visible: {
    opacity: 1,
    translateY: 0,
  },
  hidden: {
    opacity: 0,
    translateY: 50,
  },
};

interface FadeInProps {
  delay?: number;
}

export default function FadeIn({
  children,
  delay,
}: PropsWithChildren<FadeInProps>) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay, type: "spring" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
