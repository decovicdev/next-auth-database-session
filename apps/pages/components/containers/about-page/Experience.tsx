import { VStack } from "@chakra-ui/react";

import { LargeHeading, Title } from "../../shared/typography";
import Container from "../../shared/Container";
import Image from "../../shared/Image";

interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
  return (
    <Container pt="180px">
      <VStack spacing="16">
        <LargeHeading maxW="600px" textAlign="center">
          Passion Combined With Experience
        </LargeHeading>
        <Title maxW="820px" textAlign="center" fontWeight="400" color="gray">
          Intuiguide is an intuitive car travel route planning app that combines
          pre-selected waypoints and user preferences and insights to create
          unique journeys.
        </Title>
        <Image
          borderRadius="2xl"
          src={"/images/wilderness.jpeg"}
          alt="wilderness"
          loading="eager"
        />
      </VStack>
    </Container>
  );
};
export default Experience;
