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
                <Text mb={2} textAlign={descriptorTextAlign}>
                    Full name:
                </Text>
                <Text mb={2} textAlign={valueTextAlign}>
                    Full name
                </Text>
                <Text mb={2} textAlign={descriptorTextAlign}>
                    Email:
                </Text>
                <Text mb={2} textAlign={valueTextAlign}>
                    Email
                </Text>
            </InformationBox>
            <InformationBox header="Personal Information" onClick={editHandler}>
                <Text mb={2} textAlign={descriptorTextAlign}>
                    Mobile Number:
                </Text>
                <Text mb={2} textAlign={valueTextAlign}>
                    Mobile Number
                </Text>
                <Text mb={2} textAlign={descriptorTextAlign}>
                    Date of Birth:
                </Text>
                <Text mb={2} textAlign={valueTextAlign}>
                    Date of Birth
                </Text>
                <Text mb={2} textAlign={descriptorTextAlign}>
                    Pronouns:
                </Text>
                <Text mb={2} textAlign={valueTextAlign}>
                    Pronouns
                </Text>
                <Text mb={2} textAlign={descriptorTextAlign}>
                    Ethnicity:
                </Text>
                <Text mb={2} textAlign={valueTextAlign}>
                    Ethnicity
                </Text>
                <Text mb={2} textAlign={descriptorTextAlign}>
                    First Language:
                </Text>
                <Text mb={2} textAlign={valueTextAlign}>
                    First Language
                </Text>
            </InformationBox>
            <InformationBox header="School Information" onClick={editHandler}>
                <Text mb={2} textAlign={descriptorTextAlign}>
                    School:
                </Text>
                <Text mb={2} textAlign={valueTextAlign}>
                    School
                </Text>
                <Text mb={2} textAlign={descriptorTextAlign}>
                    Graduation Date:
                </Text>
                <Text mb={2} textAlign={valueTextAlign}>
                    Graduation Date
                </Text>
                <Text mb={2} textAlign={descriptorTextAlign}>
                    Cluster:
                </Text>
                <Text mb={2} textAlign={valueTextAlign}>
                    Cluster
                </Text>
                <Text mb={2} textAlign={descriptorTextAlign}>
                    Pathway:
                </Text>
                <Text mb={2} textAlign={valueTextAlign}>
                    Pathway
                </Text>
            </InformationBox>
            <InformationBox header="Career Interest" onClick={editHandler}>
                <Text mb={2} textAlign={descriptorTextAlign}>
                    Cities:
                </Text>
                <Text mb={2} textAlign={valueTextAlign}>
                    Cities
                </Text>
                <Text mb={2} textAlign={descriptorTextAlign}>
                    Open to Relocate:
                </Text>
                <Text mb={2} textAlign={valueTextAlign}>
                    Open to Relocate
                </Text>
                <Text mb={2} textAlign={descriptorTextAlign}>
                    Open to Remote Work:
                </Text>
                <Text mb={2} textAlign={valueTextAlign}>
                    Open to Remote Work
                </Text>
                <Text mb={2} textAlign={descriptorTextAlign}>
                    Job Types:
                </Text>
                <Text mb={2} textAlign={valueTextAlign}>
                    Job Types
                </Text>
                <Text mb={2} textAlign={descriptorTextAlign}>
                    Industries:
                </Text>
                <Text mb={2} textAlign={valueTextAlign}>
                    Industries
                </Text>
            </InformationBox>
        </Box>
    );
};

export default Step6;
