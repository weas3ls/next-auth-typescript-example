import {
    SimpleGrid,
    FormControl,
    FormLabel,
    InputGroup,
    Input,
    InputLeftAddon,
    Checkbox,
    Button,
    Center,
    Select,
    useDisclosure,
    Link,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";
import AuthLayout from "../components/layouts/AuthLayout";
import cities from "../components/StudentOnboarding/Dependencies/Cities";
import EmailInput from "../components/UI/Inputs/EmailInput";
import Modal from "../components/UI/Modal";

const EmployerOnboarding = () => {
    const employerRegistrationHandler = (values: any) => {
        console.log(values);
    };

    const { onOpen } = useDisclosure();

    return (
        <AuthLayout title="Employer Registration">
            <Formik
                initialValues={{ firstName: "", lastName: "", email: "" }}
                onSubmit={values => employerRegistrationHandler(values)}
            >
                <Form>
                    <SimpleGrid columns={[1, 2]} spacingX={{ base: 4, lg: 7 }} spacingY={4} my={5}>
                        <FormControl isRequired>
                            <FormLabel htmlFor="firstName">First Name</FormLabel>
                            <Input type="text" name="firstName" id="firstName" placeholder="First Name" />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel htmlFor="lastName">Last Name</FormLabel>
                            <Input type="text" name="lastName" id="lastName" placeholder="Last Name" />
                        </FormControl>
                        <EmailInput />
                        <FormControl isRequired>
                            <FormLabel htmlFor="mobile">Mobile</FormLabel>
                            <InputGroup>
                                <InputLeftAddon children="+1" />
                                <Input type="phone" name="mobile" id="mobile" placeholder="Phone number" />
                            </InputGroup>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel htmlFor="city">City</FormLabel>
                            <Select>
                                {cities.map((city: { value: string; label: string }) => (
                                    <option value={city.value} key={city.value}>
                                        {city.label}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel htmlFor="state">State</FormLabel>
                            <Select>
                                {cities.map((city: { value: string; label: string }) => (
                                    <option value={city.value} key={city.value}>
                                        {city.label}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                    </SimpleGrid>
                    <Checkbox colorScheme="green" isRequired>
                        I have read and agree to the <Modal header="Terms of Service" />
                    </Checkbox>
                    <Center w="100%">
                        <Button colorScheme="green" mt={5} type="submit">
                            Submit
                        </Button>
                    </Center>
                </Form>
            </Formik>
        </AuthLayout>
    );
};

export default EmployerOnboarding;
