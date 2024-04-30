"use client";

import { Box } from "@chakra-ui/react";

import Hero from "../components/Hero";
import Features from "../components/Features";
import Journey from "../components/Journey";
import Pathway from "../components/Pathway";
import Places from "../components/Places";
import CTO from "../components/CTO";

export default function Home() {
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
}
