import { chakra, Container as ChakraContainer } from '@chakra-ui/react';

const Container = chakra(ChakraContainer, {
  baseStyle: {
    maxW: 'container.xl',
  },
});

export default Container;
