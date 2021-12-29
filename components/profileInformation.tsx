import { EditIcon } from "@chakra-ui/icons";
import { Box, Container, Flex, HStack, IconButton, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import InformationBox from "./UI/InformationBox";

const ProfileInformation = () => {
    // const { getEditButtonProps } = useEditableControls();

    const editHandler = () => {
        console.log("ello");
    };

    return (
        <Container maxW="100%">
            <InformationBox header="Overview" onClick={editHandler}>
                <Box w={{ base: "50%", md: "30%", lg: "20%" }} textAlign="right">
                    <Text mb={2}>Full Name:</Text>
                    <Text mb={2}>Email:</Text>
                    <Text mb={2}>Mobile:</Text>
                    <Text mb={2}>Date of Birth:</Text>
                    <Text mb={2}>Pronouns:</Text>
                    <Text mb={2}>Ethnicity:</Text>
                    <Text mb={2}>First Language:</Text>
                </Box>
                <Box w={{ base: "50%", md: "70%", lg: "80%" }} textAlign="left">
                    <Text mb={2}>Full Name</Text>
                    <Text mb={2}>Email</Text>
                    <Text mb={2}>Mobile</Text>
                    <Text mb={2}>Date of Birth</Text>
                    <Text mb={2}>Pronouns</Text>
                    <Text mb={2}>Ethnicity</Text>
                    <Text mb={2}>First Language</Text>
                </Box>
            </InformationBox>
            <InformationBox header="Education" onClick={editHandler}>
                <Box w={{ base: "50%", md: "30%", lg: "20%" }} textAlign="right">
                    <Text mb={2}>School:</Text>
                    <Text mb={2}>Graduation Date:</Text>
                    <Text mb={2}>Cluster:</Text>
                    <Text mb={2}>Pathway:</Text>
                </Box>
                <Box w={{ base: "50%", md: "70%", lg: "80%" }} textAlign="left">
                    <Text mb={2}>School</Text>
                    <Text mb={2}>Graduation Date</Text>
                    <Text mb={2}>Cluster</Text>
                    <Text mb={2}>Pathway</Text>
                </Box>
            </InformationBox>
            <InformationBox header="Career Interest" onClick={editHandler}>
                <Box w={{ base: "50%", md: "30%", lg: "20%" }} textAlign="right">
                    <Text mb={2}>Cities:</Text>
                    <Text mb={2}>Open to Relocate:</Text>
                    <Text mb={2}>Open to Remote Work:</Text>
                    <Text mb={2}>Job Types:</Text>
                    <Text mb={2}>Industries:</Text>
                </Box>
                <Box w={{ base: "50%", md: "70%", lg: "80%" }} textAlign="left">
                    <Text mb={2}>Cities</Text>
                    <Text mb={2}>Open to Relocate</Text>
                    <Text mb={2}>Open to Remote Work</Text>
                    <Text mb={2}>Job Types</Text>
                    <Text mb={2}>Industries</Text>
                </Box>
            </InformationBox>
        </Container>
    );
};

export default ProfileInformation;
