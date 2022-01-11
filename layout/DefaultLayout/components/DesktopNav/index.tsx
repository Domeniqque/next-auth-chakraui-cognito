import { Box, Link as ChakraLink, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { NAV_ITEMS } from "../../config";

export const DesktopNav = () => {
  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link href={navItem.href} passHref>
            <ChakraLink
              p={2}
              href={navItem.href ?? '#'}
              fontSize={'sm'}
              fontWeight={500}
              color="gray.600"
              _hover={{
                textDecoration: 'none',
                color: "gray.800",
              }}>
              {navItem.label}
            </ChakraLink>
          </Link>
        </Box>
      ))}
    </Stack>
  );
};
