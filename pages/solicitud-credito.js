import { Box, Center } from "@chakra-ui/react";
import BarRouteRequest from "../components/BarRouteRequest/BarRouteRequest";
import FormSolicitudDatos from "../components/FormNuevaSolicitud";

export default function FormSolicitud() {
  return (
    <>
      <Box w="100%">
        <Center
          w="85%"
          borderRadius="4px"
          boxShadow="0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);"
          alignSelf="center"
          m="auto"
          mt="20px"
          flexDir="column"
        >
          <BarRouteRequest />
          <FormSolicitudDatos />
        </Center>
      </Box>
    </>
  );
}
