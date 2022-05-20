import { Box, Flex, Text, Grid, Spacer } from "@chakra-ui/react";
import NuevoRegistro from "../../data/NuevoRegistro.json";

const BarRouteRequest = () => {
  const registro = NuevoRegistro.BarRoute;

  return (
    <>
      <Box
        w="100%"
        py="10px"
        px="20px"
        borderBottom="1px"
        borderColor="gray.300"
        boxShadow="0 2px 4px 0 rgb(0 0 0 / 12%)"
      >
        <Flex justifyContent="space-between">
          {registro &&
            registro.map((item, index) => (
              <Flex
                key={`Flex-${index}BarRoute`}
                alignContent="space-between"
                w="auto"
              >
                <Box
                  clipPath="circle(38% at 50% 50%)"
                  bg="blue.400"
                  p="10px"
                  color="white"
                >
                  {item.id}
                </Box>
                <Box p="10px">
                  <Text fontWeight="semibold">{item.title}</Text>
                </Box>
              </Flex>
            ))}
        </Flex>
      </Box>
    </>
  );
};

export default BarRouteRequest;
