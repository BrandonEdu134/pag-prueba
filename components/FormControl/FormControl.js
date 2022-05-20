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
  SliderMark,
  Tooltip,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";

const FormControl = () => {
  const [sliderValue, setSliderValue] = useState(1000);

  const [sliderValue2, setSliderValue2] = useState(4);

  const formateado = sliderValue.toLocaleString("en");

  return (
    <>
      <Flex p=" 10px 120px 50px 0px">
        <Spacer />
        <Center
          borderRadius="2%"
          boxShadow="0px 0px 2px 0.5px"
          p="30px 0 30px 0"
          w="35%"
          bgColor="rgba(256,256,256,0.6)"
          flexDir="column"
          paddingTop="15px"
        >
          <Text fontSize="30px">Simula tu crédito</Text>

          <Text fontSize="15px">¡Obtén tu crédito al instante!</Text>

          <Center m="10px 0px 30px 0px">
            <Text>Monto: </Text>
            <Text textColor="blue.500" fontWeight="semibold">
              &nbsp; ${formateado}.00
            </Text>
          </Center>

          <Center w="85%" mt="5">
            <Text>$1000</Text>
            <Slider
              aria-label="slider-ex-6"
              onChange={(val) => setSliderValue(val)}
              defaultValue={1000}
              min={1000}
              max={600000}
              m="0 15px 0 15px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <Tooltip
                hasArrow
                bg="blue.400"
                color="white"
                placement="top"
                isOpen
                label={`$ ${formateado}.00`}
              >
                <SliderThumb bg="blue.300" />
              </Tooltip>
            </Slider>
            <Text>$600000</Text>
          </Center>

          <Center m="10px 0px 30px 0px">
            <Text>Plazo: </Text>
            <Text textColor="orange" fontWeight="semibold">
              &nbsp; {sliderValue2} quincenas
            </Text>
          </Center>

          <Center w="85%">
            <Text>4</Text>
            <Slider
              aria-label="slider-ex-6"
              onChange={(val) => setSliderValue2(val)}
              defaultValue={4}
              min={4}
              max={48}
              m="0 15px 0 15px"
              colorScheme="orange"
              step={4}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <Tooltip
                hasArrow
                bg="orange"
                color="white"
                placement="top"
                isOpen
                label={`${sliderValue2}`}
              >
                <SliderThumb bg="orange" />
              </Tooltip>
            </Slider>
            <Text>48</Text>
          </Center>

          <VStack
            w="100%"
            spacing={1}
            mb="20px"
            mt="20px"
            bg="rgba(240,240,240,0.6)"
          >
            <Flex
              alignItems="space-between"
              w="100%"
              p="5px 7.5%  5px 7.5%"
              opacity="60%"
            >
              <Text>Préstamo</Text>
              <Spacer />
              <Text>${formateado}.00</Text>
            </Flex>
            <Divider />
            <Flex
              alignItems="space-between"
              w="100%"
              p="5px 7.5%  5px 7.5%"
              opacity="60%"
            >
              <Text>Plazo</Text>
              <Spacer />
              <Text>{sliderValue2} quincenas</Text>
            </Flex>
            <Divider />
            <Flex
              alignItems="space-between"
              w="100%"
              p="5px 7.5%  5px 7.5%"
              opacity="60%"
            >
              <Text>Interés</Text>
              <Spacer />
              <Text>Interés</Text>
            </Flex>
            <Divider />
            <Flex alignItems="space-between" w="100%" p="5px 7.5%  5px 7.5%">
              <Text fontWeight="bold">Mónto total a pagar</Text>
              <Spacer />
              <Text>${formateado}.00</Text>
            </Flex>
          </VStack>
          <Link
            w="150px"
            py="2.5"
            bg="blue.400"
            color="white"
            textAlign="center"
            borderRadius="5"
            _hover={{ textDecoration: "none", bg: "blue.500" }}
            href="solicitud-credito"
            fontWeight="semibold"
          >
            ¡SOLICITALO YA!
          </Link>
        </Center>
      </Flex>
    </>
  );
};

export default FormControl;
