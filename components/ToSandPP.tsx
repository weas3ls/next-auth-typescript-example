import { Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel } from "@chakra-ui/react";
import React from "react";
import PrivacyPolicy from "./StudentOnboarding/Dependencies/PrivacyPolicy";
import TermsOfService from "./StudentOnboarding/Dependencies/TermsOfService";

const ToSandPP = () => {
    return (
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
                <AccordionPanel pb={4} px={5} maxH="25vh" overflowY="auto">
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
                <AccordionPanel pb={4} px={5} maxH="25vh" overflowY="auto">
                    <PrivacyPolicy />
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default ToSandPP;
