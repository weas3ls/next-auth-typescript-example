import { Box, Center, Container, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

const Submit = () => {
    return (
        <Box mt={5}>
            <Center flexDirection="column">
                <Text fontSize="2xl" align="center" mb={7}>
                    Information Submitted
                </Text>
                <Box>
                    <Text mb={5}>
                        Thank you for providing us with your information! A verification email will be sent to the email
                        you provided
                        <br /> If you do not see an email from us within the next 24 hours, please check your spam
                        folder
                    </Text>
                    <Text mb={5}>
                        Please click the link within 72 hours to setup your password complete your account registration
                    </Text>
                </Box>
            </Center>
            <Container maxW="container.lg">
                <NextLink href="" passHref replace>
                    <Link>Resend Email</Link>
                </NextLink>
            </Container>
        </Box>
    );
};

export default Submit;
