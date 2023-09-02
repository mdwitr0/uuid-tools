'use client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
}

export const WithChakraUI = ({ children }: Props) => {
  return (
    <>
      <ChakraProvider >{children}</ChakraProvider>
    </>
  );
};
