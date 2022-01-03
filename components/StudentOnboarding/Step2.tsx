import { Center, Checkbox } from "@chakra-ui/react";
import React from "react";
import ToSandPP from "../ToSandPP";

const Step2 = () => {
    return (
        <>
            <Center>
                <ToSandPP />
            </Center>
            <Checkbox mt={5} colorScheme="green">
                I accept the terms of service and privacy policy
            </Checkbox>
        </>
    );
};

export default Step2;
