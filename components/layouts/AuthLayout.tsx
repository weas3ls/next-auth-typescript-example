import { Box, Center, Image, Text } from "@chakra-ui/react";
import React from "react";

const AuthLayout = ({ children, ...props }: { children: any; title: string }) => {
    return (
        <Box as="main" justifyContent="center" alignItems="center" mb={5}>
            <Center flexDirection="column" mt={20}>
                <Image src="https://via.placeholder.com/468x60?text=Emerge" mb={10} className="img-fluid" />
                <Box w={{ base: "90%", md: "90%", xl: "75%" }} borderWidth="1px" borderRadius="lg" p="1.5rem">
                    <Text fontSize="3xl" align="center" mb={7}>
                        {props.title}
                    </Text>
                    {children}
                </Box>
            </Center>
        </Box>
    );
};

export default AuthLayout;
