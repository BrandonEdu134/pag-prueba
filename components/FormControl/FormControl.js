import {
  Button,
  Flex,
  Spacer,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Center,
  VStack,
  Divider,
} from "@chakra-ui/react";

const FormControl = () => {
  return (
    <>
      <Flex p=" 10px 120px 50px 0px">
        <Spacer />
        <Center
          borderRadius="2%"
          boxShadow="0px 0px 2px 0.5px"
          p="30px 0 30px 0"
          w="40%"
          bgColor="whiteAlpha.800"
          flexDir="column"
          paddingTop="15px"
        >
          <Text fontSize="30px">Simula tu crédito</Text>

          <Text fontSize="15px">¡Obtén tu crédito al instante!</Text>

          <Center m="10px 0px 30px 0px">
            <Text>Monto: </Text>
            <Text textColor="blue"> $Monto$</Text>
          </Center>

          <Center w="85%">
            <Text>$1000</Text>
            <Slider
              aria-label="slider-ex-1"
              defaultValue={30}
              m="0 15px 0 15px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text>$600000</Text>
          </Center>

          <Center m="10px 0px 30px 0px">
            <Text>Plazo: </Text>
            <Text textColor="orange"> $ Quincenas</Text>
          </Center>

          <Center w="85%">
            <Text>$1000</Text>
            <Slider
              aria-label="slider-ex-1"
              defaultValue={30}
              m="0 15px 0 15px"
              colorScheme="red"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text>$600000</Text>
          </Center>

          <VStack w="100%" spacing={0} mb="20px">
            <Flex
              alignItems="space-between"
              w="100%"
              bg="blue.200"
              p="5px 7.5%  5px 7.5%"
            >
              <Text>Préstamo</Text>
              <Spacer />
              <Text textColor="blue">Monto</Text>
            </Flex>
            <Divider />
            <Flex
              alignItems="space-between"
              w="100%"
              bg="blue.200"
              p="5px 7.5%  5px 7.5%"
            >
              <Text>Plazo</Text>
              <Spacer />
              <Text textColor="blue">Plazo</Text>
            </Flex>
            <Divider />
            <Flex
              alignItems="space-between"
              w="100%"
              bg="blue.200"
              p="5px 7.5%  5px 7.5%"
            >
              <Text>Interés</Text>
              <Spacer />
              <Text textColor="blue">Interés</Text>
            </Flex>
            <Divider />
            <Flex
              alignItems="space-between"
              w="100%"
              bg="blue.200"
              p="5px 7.5%  5px 7.5%"
            >
              <Text fontWeight="bold">Mónto total a pagar</Text>
              <Spacer />
              <Text textColor="blue" fontWeight="bold">
                Monto
              </Text>
            </Flex>
          </VStack>
          <Button colorScheme="blue" m="5px">
            ¡SOLICITALO YA!
          </Button>
        </Center>
      </Flex>
    </>
  );
};

export default FormControl;
