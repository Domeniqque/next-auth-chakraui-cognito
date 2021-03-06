import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';
import { MobileNav } from './components/MobileNav';
import { DesktopNav } from './components/DesktopNav';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

interface DefaultLayoutProps {
  children: React.ReactElement;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  const { isOpen, onToggle } = useDisclosure();
  const { data: session, status } = useSession()
  const isLogged = status === "authenticated";
  console.log({ session, status })

  return (
    <Box minH="100vh" w="100%">
      <Flex
        bg="white"
        color="gray.600"
        h="60px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor="gray.200"
        align="center">
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily="heading"
            color={useColorModeValue('gray.800', 'white')}>
            Logo
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify="flex-end"
          direction="row"
          spacing={6}>
            {!isLogged ? (
            <>
              {/* <Link href="/auth/login" passHref prefetch> */}
                <Button
                  // as="a"
                  fontSize="sm"
                  fontWeight={400}
                  variant="link"
                  onClick={() => signIn('cognito',{
                    callbackUrl: `${window.location.origin}/protected`,
                  })}
                >
                  Sign In
                </Button>
              {/* </Link> */}

              {/* <Link href="/auth/signup" passHref prefetch> */}
                <Button
                  display={{ base: 'none', md: 'inline-flex' }}
                  fontSize="sm"
                  fontWeight={600}
                  color="white"
                  bg="pink.400"
                  // onClick={() => signUp}
                  _hover={{
                    bg: 'pink.300',
                  }}>
                  Sign Up
                </Button>
              {/* </Link> */}
              </>
            ) : ( 
              <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize="sm"
              fontWeight={600}
              color="white"
              bg="pink.400"
              onClick={() => signOut()}
              _hover={{
                bg: 'pink.300',
              }}>
              Logout
            </Button>
          ) }
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>

      {children}
    </Box>
  );
}
