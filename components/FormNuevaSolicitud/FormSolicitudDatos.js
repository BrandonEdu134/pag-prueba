import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  Container,
  ChakraProvider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  extendTheme,
} from "@chakra-ui/react";
import { useState } from "react";
import NuevoRegistro from "../../data/NuevoRegistro.json";

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
};
export const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
  },
});

const FormSolicitudDatos = () => {
  const datosGenerales = NuevoRegistro.DatosGenerales;
  const [input, setInput] = useState(" ");
  const handleInputChange = (e) => setInput(e.target.value);
  const isError = input === "";
  return (
    <ChakraProvider theme={theme}>
      <Grid w="100%" p="20px" templateColumns="repeat(4, 1fr)" gap={2}>
        {datosGenerales &&
          datosGenerales.map((item, index) => (
            <Box p={2} key={`Box-${index}-datosGen`} color="blackAlpha.800">
              <FormControl
                variant="floating"
                id="first-name"
                isRequired
                isInvalid={isError}
              >
                <Input
                  placeholder=" "
                  type={item.type}
                  onChange={handleInputChange}
                  variant="flushed"
                  borderColor="blackAlpha.600"
                  fontSize="1.3em"
                />
                <FormLabel>{item.title}</FormLabel>
                {!isError ? (
                  ""
                ) : (
                  <FormErrorMessage>{item.error}</FormErrorMessage>
                )}
              </FormControl>
            </Box>
          ))}
      </Grid>
      <Box bg="blue" w="100px" h="100px" />
    </ChakraProvider>
  );
};

export default FormSolicitudDatos;
