import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import InformationBox from "../UI/InformationBox";

const Step6 = () => {
    const descriptorTextAlign = useBreakpointValue({ base: "center", md: "right" });
    const valueTextAlign = useBreakpointValue({ base: "center", md: "left" });

    const editHandler = (step: number) => {
        console.log(step);
    };

    return (
        <Box mt={5}>
            <InformationBox header="Basic Information" onClick={editHandler}>
                <Text mb={2}>Full name:</Text>
                <Text mb={2}>Full name</Text>
                <Text mb={2}>Email:</Text>
                <Text mb={2}>Email</Text>
            </InformationBox>
            <InformationBox header="Personal Information" onClick={editHandler}>
                <Text mb={2}>Mobile Number:</Text>
                <Text mb={2}>Mobile Number</Text>
                <Text mb={2}>Date of Birth:</Text>
                <Text mb={2}>Date of Birth</Text>
                <Text mb={2}>Pronouns:</Text>
                <Text mb={2}>Pronouns</Text>
                <Text mb={2}>Ethnicity:</Text>
                <Text mb={2}>Ethnicity</Text>
                <Text mb={2}>First Language:</Text>
                <Text mb={2}>First Language</Text>
            </InformationBox>
            <InformationBox header="School Information" onClick={editHandler}>
                <Text mb={2}>School:</Text>
                <Text mb={2}>School</Text>
                <Text mb={2}>Graduation Date:</Text>
                <Text mb={2}>Graduation Date</Text>
                <Text mb={2}>Cluster:</Text>
                <Text mb={2}>Cluster</Text>
                <Text mb={2}>Pathway:</Text>
                <Text mb={2}>Pathway</Text>
            </InformationBox>
            <InformationBox header="Career Interest" onClick={editHandler}>
                <Text mb={2}>Cities:</Text>
                <Text mb={2}>Cities</Text>
                <Text mb={2}>Open to Relocate:</Text>
                <Text mb={2}>Open to Relocate</Text>
                <Text mb={2}>Open to Remote Work:</Text>
                <Text mb={2}>Open to Remote Work</Text>
                <Text mb={2}>Job Types:</Text>
                <Text mb={2}>Job Types</Text>
                <Text mb={2}>Industries:</Text>
                <Text mb={2}>Industries</Text>
            </InformationBox>
        </Box>
    );
};

export default Step6;
