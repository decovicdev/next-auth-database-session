import { chakra, Text as ChakraText } from '@chakra-ui/react';

const Text = chakra(ChakraText, {
  baseStyle: {
    textAlign: ['center', 'center', 'center', 'left'],
  },
});

const ChakraHeading = chakra(Text, {
  baseStyle: {
    fontWeight: 'bold',
  },
});
const LargeHeading = chakra(ChakraHeading, {
  baseStyle: {
    fontSize: ['40px', '50px', '50px', '60px'],
    lineHeight: '1.1',
  },
});

const Heading = chakra(ChakraHeading, {
  baseStyle: {
    fontSize: ['25px', '30px', '30px', '40px'],
    lineHeight: '1.2',
  },
});

const Title = chakra(ChakraHeading, {
  baseStyle: {
    fontSize: '20px',
  },
});

const Body2 = chakra(Text, {
  baseStyle: {
    fontSize: '18px',
  },
});

const Body1 = chakra(Text, {
  baseStyle: {
    fontSize: ['14px', '16px'],
  },
});

const Caption1 = chakra(Text, {
  baseStyle: {
    fontSize: '12px',
  },
});

const Caption2 = chakra(Text, {
  baseStyle: {
    fontSize: '14px',
  },
});

export { LargeHeading, Heading, Title, Body1, Body2, Caption1, Caption2 };
