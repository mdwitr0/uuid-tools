'use client';

import { AppProvider } from '@/core/providers';
import { Box } from '@chakra-ui/react';


interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => (
  <html lang="ru">
    <body >
      <AppProvider>
        <Box>{children}</Box>
      </AppProvider>
    </body>
  </html>
);

export default RootLayout;
