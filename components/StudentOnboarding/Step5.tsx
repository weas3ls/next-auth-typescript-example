import { Box, Checkbox, Flex, FormControl, FormHelperText, SimpleGrid, Spacer, Stack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";

import MultiSelect from "../UI/Inputs/MultiSelect";
import cities from "./Dependencies/Cities";
import jobTypes from "./Dependencies/JobTypes";
import industries from "./Dependencies/Industries";

const Step5 = () => {
    const step5Handler = (values: any) => {
        console.log(values);
    };

    return (
        <Formik
            initialValues={{ school: "", graduationDate: "", cluster: "", pathway: "" }}
            onSubmit={values => step5Handler(values)}
        >
            <Form>
                <SimpleGrid my={5} columns={{ sm: 1, xl: 2 }} spacing="24px">
                    <FormControl isRequired mb={{ base: 5, md: 0 }}>
                        <MultiSelect name="cities" options={cities} label="Cities" />
                        <FormHelperText mt={0}>Select one or more cities you are open to working in</FormHelperText>
                    </FormControl>
                    <Stack direction={["column", "row"]}>
                        <Checkbox colorScheme="green" isRequired>
                            I am open to relocate
                        </Checkbox>
                        <Spacer />
                        <Checkbox colorScheme="green" isRequired m={0}>
                            I am open to remote work
                        </Checkbox>
                    </Stack>
                </SimpleGrid>
                <SimpleGrid columns={[1, 2]} gap={5}>
                    <FormControl isRequired>
                        <MultiSelect name="jobType" options={jobTypes} label="Job Types" />
                        <FormHelperText mt={0}>Select one or more job types you are interested in</FormHelperText>
                    </FormControl>
                    <FormControl isRequired>
                        <MultiSelect name="industry" options={industries} label="Industries" />
                        <FormHelperText mt={0}>Select one or more industries you are interested in</FormHelperText>
                    </FormControl>
                </SimpleGrid>
            </Form>
        </Formik>
    );
};

export default Step5;
