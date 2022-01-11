import { Flex, Heading, Stack, Text } from '@chakra-ui/react';

interface AuthLayoutProps {
  children: React.ReactElement;
  title: String;
  heading?: String;
}

export function AuthLayout({ children, title, heading }: AuthLayoutProps) {

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg="gray.50">
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Stack align="center">
          <Heading fontSize="4xl" textAlign="center">
            {title}
          </Heading>

          {heading && (
            <Text fontSize="lg" color="gray.600">
              {heading}
            </Text>
          )}
        </Stack>

        {children}
      </Stack>
    </Flex>
  );
}