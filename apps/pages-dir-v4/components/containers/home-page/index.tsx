import { Box } from "@chakra-ui/react";

import Hero from "../../shared/Hero";
import Features from "./Features";
import Journey from "./Journey";
import Pathway from "./Pathway";
import Places from "./Places";
import CTO from "./CTO";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = (props) => {
  return (
    <Box>
      <Hero />
      <Journey />
      <Features />
      <Places />
      <Pathway />
      <CTO />
    </Box>
  );
};
export default HomePage;
