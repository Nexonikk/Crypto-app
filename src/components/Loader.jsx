import { VStack, Box, Spinner } from "@chakra-ui/react"

const Loader = () => {
    return (
        <VStack h={"90vh"} justifyContent={"center"} >
            <Box transform={"scale(3)"}>
                <Spinner size={"sm"}>

                </Spinner>
            </Box>
        </VStack >
    )
}

export default Loader