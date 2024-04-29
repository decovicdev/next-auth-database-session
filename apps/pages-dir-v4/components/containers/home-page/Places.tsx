import { Divider, Grid, GridItem, HStack } from "@chakra-ui/react";

import { Body2 } from "../../shared/typography";
import FadeIn from "../../shared/FadeIn";
import Image from "../../shared/Image";

const places = [
  { name: "Paris", image: "/images/paris.png", map: "/images/paris-map.png" },
  {
    name: "Gorges du Verdon",
    image: "/images/gorges-du-verdon.png",
    map: "/images/paris-map.png",
  },
  {
    name: "Dune du Pilate",
    image: "/images/dune-du-pilate.png",
    map: "/images/paris-map.png",
  },
  {
    name: "Parc de Beauval",
    image: "/images/parc-de-beauval.png",
    map: "/images/paris-map.png",
  },
];

interface PlacesProps {}

const Places: React.FC<PlacesProps> = (props) => {
  return (
    <Grid
      templateColumns="repeat(auto-fit, minmax(320px, 0))"
      placeContent="center"
      mt="-150px"
      gap={4}
    >
      {places.map((place, index) => {
        const isEven = index % 2 !== 0;
        const transform = `${
          isEven ? "translateY(0%)" : "translateY(-5%)"
        } translateX(-${index * 10}%) `;

        {
        }
        return (
          <FadeIn key={place.name} delay={index * 0.5}>
            <GridItem
              py="4"
              transform={["", "", "", transform]}
              bgImage={`url('${place.image}')`}
              bgSize="cover"
              bgRepeat="no-repeat"
              borderRadius="3xl"
              h="320px"
            >
              <HStack px="4" mb="4">
                <Image src={place.map} alt={place.name} />
                <Body2 color="white">{place.name}</Body2>
              </HStack>
              <Divider borderBottomWidth="4px" borderColor="white" />
            </GridItem>
          </FadeIn>
        );
      })}
    </Grid>
  );
};
export default Places;
