import { Spacer, VStack } from "@chakra-ui/react";

import AppDownloadLinks from "../../shared/AppDownloadLinks";
import Container from "../../shared/Container";
import FadeIn from "../../shared/FadeIn";
import Image from "../../shared/Image";
import Stack from "../../shared/Stack";
import { Body1, Heading } from "../../shared/typography";

interface CTOProps {}

const CTO: React.FC<CTOProps> = (props) => {
  return (
    <Container color="white" mt="12" minH="725px">
      <Stack
        p="4"
        pb="0"
        bg="secondary"
        minH="550px"
        pos="relative"
        borderRadius="3xl"
        flexDirection={{
          base: "column-reverse",
          xl: "row",
        }}
        alignItems="center"
      >
        <Image
          pos={{
            base: "relative",
            xl: "absolute",
          }}
          bottom="0"
          left={{
            base: "0",
            xl: "5%",
          }}
          src="/images/splash-screen.png"
          alt="Splash screen"
        />

        <Spacer />
        <FadeIn>
          <VStack maxW="480px" spacing="8" align="flex-start">
            <Heading>
              The world is yours to explore – ready to take the wheel?
            </Heading>
            <Body1 color="whiteAlpha.700">
              Download the Intuiguide app and discover a better way to travel.
              Plan your first trip today.
            </Body1>
            <AppDownloadLinks />
          </VStack>
        </FadeIn>
        <Spacer flex={0.2} />
      </Stack>
    </Container>
  );
};
export default CTO;
