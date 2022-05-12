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
} from "@chakra-ui/react";
import { useState } from "react";

const FormControl = () => {
  const [sliderValue, setSliderValue] = useState(1000);

  const [sliderValue2, setSliderValue2] = useState(4);

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
            <Text textColor="blue"> ${sliderValue}</Text>
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
                label={`$ ${sliderValue}`}
              >
                <SliderThumb />
              </Tooltip>
            </Slider>
            <Text>$600000</Text>
          </Center>

          <Center m="10px 0px 30px 0px">
            <Text>Plazo: </Text>
            <Text textColor="orange">
              {""} {sliderValue2} quincenas
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
              colorScheme="red"
              step={4}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <Tooltip
                hasArrow
                bg="red.500"
                color="white"
                placement="top"
                isOpen
                label={`${sliderValue2}`}
              >
                <SliderThumb />
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
              <Text textColor="blue">${sliderValue}</Text>
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
              <Text textColor="blue">{sliderValue2} quincenas</Text>
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
              <Text textColor="blue">Interés</Text>
            </Flex>
            <Divider />
            <Flex alignItems="space-between" w="100%" p="5px 7.5%  5px 7.5%">
              <Text fontWeight="bold">Mónto total a pagar</Text>
              <Spacer />
              <Text textColor="blue" fontWeight="bold">
                ${sliderValue}
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
