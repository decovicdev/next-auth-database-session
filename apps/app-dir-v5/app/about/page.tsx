"use client";

import { Box } from "@chakra-ui/react";

import Experience from "@/components/Experience";
import AboutUs from "@/components/AboutUs";
import CTO from "@/components/CTO";

interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <Box>
      <Experience />
      <AboutUs />
      <CTO />
    </Box>
  );
};
export default AboutPage;
