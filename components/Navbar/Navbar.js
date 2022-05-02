import { Flex, Spacer, Button, Center } from "@chakra-ui/react";

const Navbar = () => (
  <Flex w="80%" m="auto" mt="30px" mb="50px" alignItems="flex-end">
    <Spacer />
    <Center>
      <Button colorScheme="gray" variant="outline" size="md">
        ¿YA ERES CLIENTE?
      </Button>
      <Spacer w="5px" />
      <Button borderColor="#000000" variant="outline" size="md">
        PORTAL
      </Button>
    </Center>
  </Flex>
);

export default Navbar;
