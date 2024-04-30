import { chakra, Stack as ChekraStack } from '@chakra-ui/react';

const Stack = chakra(ChekraStack, {
  baseStyle: {
    flexDirection: ['column', 'column', 'column', 'row'],
    gap: ['4', '4', '8'],
    spacing: '0',
    alignItems: ['center', 'center', 'center', 'flex-start'],
  },
});

export default Stack;
