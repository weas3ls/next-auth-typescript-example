import { Box, FormControl, FormLabel, Input, SimpleGrid } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";
import EmailInput from "../UI/Inputs/EmailInput";

const Step1 = () => {
    const step1Handler = (values: any) => {
        console.log(values);
    };

    return (
        <Formik initialValues={{ firstName: "", lastName: "", email: "" }} onSubmit={values => step1Handler(values)}>
            <Form>
                <SimpleGrid columns={[1, 2]} gap={{ base: 2, lg: 10 }} my={5}>
                    <Box>
                        <FormControl isRequired>
                            <FormLabel htmlFor="firstName">First Name</FormLabel>
                            <Input id="firstName" placeholder="First Name" />
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl isRequired>
                            <FormLabel htmlFor="lastName">Last Name</FormLabel>
                            <Input id="lastName" placeholder="Last Name" />
                        </FormControl>
                    </Box>
                </SimpleGrid>
                <Box w="100%" mb={5}>
                    <EmailInput />
                </Box>
            </Form>
        </Formik>
    );
};

export default Step1;
