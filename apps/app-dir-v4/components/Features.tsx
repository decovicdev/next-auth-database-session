import { Box, Circle, Fade, VStack, Wrap, WrapItem } from "@chakra-ui/react";

import { Body1, Heading, Title } from "./typography";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Image from "./Image";

const points = [
  {
    title: "Set your parameters",
    description:
      "Select from pre-trip photos so the app can work its trip planning magic.",
    icon: "/images/folder.png",
  },
  {
    title: "Provide insights",
    description:
      "This intuitive app gets smarter the more you interact with it.",
    icon: "/images/sun.png",
  },
  {
    title: "Enjoy the journey",
    description:
      "Celebrate the freedom of the road with custom routes just for you.",
    icon: "/images/rocket.png",
  },
];

export default function Features() {
  return (
    <Box
      minH={980}
      bgImage="url('/images/background.png')"
      bgRepeat="no-repeat"
      bgSize="cover"
      pt="180px"
    >
      <Container>
        <FadeIn>
          <Wrap justify="space-between">
            {points.map((point, i) => {
              return (
                <FadeIn key={point.title} delay={0.5 * i}>
                  <WrapItem>
                    <VStack spacing="8" p="4" maxW="360px">
                      <Circle size="100px" bg="secondary">
                        <Image src={point.icon} alt={point.title} />
                      </Circle>
                      <Title textAlign="center">{point.title}</Title>
                      <Body1 textAlign="center" color="gray.400">
                        {point.description}
                      </Body1>
                    </VStack>
                  </WrapItem>
                </FadeIn>
              );
            })}
          </Wrap>
          <VStack mt="20" spacing="8" pb="180px">
            <Heading>Easy exploration, right at your fingertips.</Heading>
            <Body1 color="gray.400" maxW="770px" textAlign="center">
              Trip planning is easier with Intuiguide. Navigate new cities,
              towns, and tourist hotspots in your own unique way.
            </Body1>
          </VStack>
        </FadeIn>
      </Container>
    </Box>
  );
}
