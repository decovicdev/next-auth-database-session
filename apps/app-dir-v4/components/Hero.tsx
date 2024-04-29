import { Box, VStack } from "@chakra-ui/react";

import { Body1, LargeHeading } from "./typography";
import AppDownloadLinks from "./AppDownloadLinks";
import { HeroBgClipPath } from "./ImageClipPath";
import Container from "./Container";
import Image from "./Image";
import Stack from "./Stack";

const bg = `linear-gradient(to bottom right, rgba(255,255,255,.9),rgba(255,255,255,.1)), url('/images/bg.png')`;

export default function Hero() {
  return (
    <Box
      minH={1000}
      background={bg}
      clipPath="url(#clipPath)"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Box pos="absolute">
        <HeroBgClipPath />
      </Box>
      <Container pt={["20", "200px"]}>
        <Stack justify="space-evenly">
          <VStack
            align={["center", "center", "center", "flex-start"]}
            spacing="8"
            maxW="600px"
          >
            <LargeHeading>There’s a smarter way to drive.</LargeHeading>
            <Body1>
              Take car travel to the next level with intuitive route planning
              from Intuiguide today.
            </Body1>
            <AppDownloadLinks />
          </VStack>
          <Image src="/images/map-screen.png" alt="hero" loading="eager" />
        </Stack>
      </Container>
    </Box>
  );
}
