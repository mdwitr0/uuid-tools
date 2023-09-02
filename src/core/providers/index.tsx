import { WithChakraUI } from "./with-chakra-ui";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    return (
          <WithChakraUI>{children}</WithChakraUI>
    );
  };
  