import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

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

const FadeIn: React.FC<PropsWithChildren<FadeInProps>> = ({
  children,
  delay,
}) => {
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
};
export default FadeIn;
