import { VStack } from "@chakra-ui/react";

import { Body1, Heading } from "../../shared/typography";
import Container from "../../shared/Container";
import FadeIn from "../../shared/FadeIn";
import Image from "../../shared/Image";
import Stack from "../../shared/Stack";

interface PathwayProps {}

const Pathway: React.FC<PathwayProps> = (props) => {
  return (
    <Container my="16">
      <FadeIn>
        <Stack justify="center" alignItems="center">
          <VStack align="flex-start" maxW="470px">
            <Heading>
              Create a personal pathway to popular travel destinations.
            </Heading>
            <Body1 color="gray.400">
              Most trip planners value speed above all else. At Intuiguide, we
              know that the journey is sometimes just as important as the
              destination. Experience cities based on your preferences, not on
              your ETA.
            </Body1>
          </VStack>
          <Image src="/images/tourist.png" alt="Tourist" />
        </Stack>
      </FadeIn>
    </Container>
  );
};
export default Pathway;
