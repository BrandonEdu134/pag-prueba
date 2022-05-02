import { Container, Flex, Image } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import FormControl from "../components/FormControl";

export default function Home() {
  return (
    <>
      <Flex
        bgImage="/images/bgfoto.jpg"
        w="100%"
        bgRepeat="no-repeat"
        bgSize="100%"
        flexDirection="column"
      >
        <Navbar />
        <FormControl />
      </Flex>
    </>
  );
}
