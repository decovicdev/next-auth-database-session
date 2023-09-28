import { Container, VStack } from "@chakra-ui/react";

import { Body1, Heading } from "./typography";
import FadeIn from "./FadeIn";
import Image from "./Image";
import Stack from "./Stack";

interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = (props) => {
  return (
    <Container maxW="1320px" p="0" my="40" mr="0">
      <FadeIn>
        <Stack spacing="0">
          <VStack align="flex-start" spacing="8" p="4">
            <Heading maxW="500px">Pssst...Here is about our company</Heading>
            <Body1 color="gray" maxW="670px">
              When it comes to car travel, the quickest route to your end
              destination isn’t necessarily the best route. Speed might be a
              factor when you’re running late for a business meeting or driving
              a taxi, but for people looking to enjoy the city and live in the
              moment, the drive is part of the fun. Most route planning apps on
              the market don’t accommodate this.
              <br />
              <br />
              We created Intuiguide to provide access to one that does. Instead
              of relying entirely on traffic and ETA, the Intuiguide app uses an
              innovative photo-based system that allows users to pre-select
              waypoints and create a journey based on that. With a conventional
              GPS or navigation system, this could take hours – you would need
              to research all your waypoints and add them to your itinerary one
              by one. The Intuiguide algorithm automates the process and
              suggests destinations it thinks you will like. This translates to
              less time spent researching local points of interest, and more
              time enjoying your trip.
              <br />
              <br />
              Whether you’re going on vacation or traveling to new neighborhoods
              within your own city, Intuiguide makes it easier to explore. From
              local favorites and hidden gems to world-famous tourist hotspots,
              the ability to create the perfect travel route is right at your
              fingertips. Intuiguide is currently operational in France and will
              be adding more maps and locations as we expand our user base.
              <br />
            </Body1>
          </VStack>
          <Image src="/images/water.png" alt="water" />
        </Stack>
      </FadeIn>
    </Container>
  );
};
export default AboutUs;
