import { Stack, useColorModeValue, Text, Flex, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { NAV_ITEMS } from "../../config";


export const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <Stack spacing={4} key={navItem.href}>
          <Link href={navItem.href} passHref>
            <Flex
              py={2}
              as={ChakraLink}
              justify={'space-between'}
              align={'center'}
              _hover={{
                textDecoration: 'none',
              }}>
              <Text
                fontWeight={600}
                color="gray.600">
                {navItem.label}
              </Text>
            </Flex>
          </Link>
        </Stack>
      ))}
    </Stack>
  );
};