import { Center, Checkbox } from "@chakra-ui/react";
import React from "react";
import LegalAccordion from "../LegalAccordion";

const Step2 = () => {
    return (
        <>
            <Center>
                <LegalAccordion />
            </Center>
            <Checkbox mt={5} colorScheme="green">
                I accept the terms of service and privacy policy
            </Checkbox>
        </>
    );
};

export default Step2;
