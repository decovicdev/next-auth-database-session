import { Box } from "@chakra-ui/react";

import CTO from "../home-page/CTO";
import Experience from "./Experience";
import AboutUs from "./AboutUs";

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
