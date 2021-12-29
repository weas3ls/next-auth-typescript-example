import {
    Accordion,
    AccordionItem,
    AccordionButton,
    Box,
    AccordionIcon,
    AccordionPanel,
    Center,
    Checkbox,
} from "@chakra-ui/react";
import React from "react";
import PrivacyPolicy from "./Dependencies/PrivacyPolicy";
import TermsOfService from "./Dependencies/TermsOfService";

const Step2 = () => {
    return (
        <>
            <Center>
                <Accordion mt={5} w="100%" allowToggle>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    Terms of Service
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} maxH="25vh" overflowY="auto">
                            <TermsOfService />
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    Privacy Policy
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} maxH="25vh" overflowY="auto">
                            <PrivacyPolicy />
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Center>
            <Checkbox mt={5} colorScheme="green">
                I accept the terms of service and privacy policy
            </Checkbox>
        </>
    );
};

export default Step2;
