import { VStack } from "@chakra-ui/react";

import { Body1, Heading } from "../../shared/typography";
import Container from "../../shared/Container";
import FadeIn from "../../shared/FadeIn";
import Image from "../../shared/Image";
import Stack from "../../shared/Stack";

interface JourneyProps {}

const Journey: React.FC<JourneyProps> = (props) => {
  return (
    <Container my="12">
      <FadeIn>
        <Stack spacing="12" alignItems="center" justify="center">
          <Image src="/images/map.png" alt="Map" />
          <VStack maxW="470px">
            <Heading>Start your journey and we’ll do the rest…</Heading>
            <Body1 color="gray.400">
              Select your key destinations and waypoints, then watch as the app
              creates custom routes just for you!
            </Body1>
          </VStack>
        </Stack>
      </FadeIn>
    </Container>
  );
};
export default Journey;
