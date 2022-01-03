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
    Box,
    Container,
    Text,
    Link,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React, { useState } from "react";
import NextLink from "next/link";
import AuthLayout from "../components/layouts/AuthLayout";
import cities from "../components/StudentOnboarding/Dependencies/Cities";
import EmailInput from "../components/UI/Inputs/EmailInput";
import Modal from "../components/UI/Modal";
import LegalAccordion from "../components/LegalAccordion";

const EmployerOnboarding = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const employerRegistrationHandler = (values: any) => {
        setFormSubmitted(true);
    };

    return (
        <>
            <AuthLayout title={formSubmitted ? "Information Submitted" : "Employer Registration"} size="">
                {!formSubmitted ? (
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
                                I have read and agree to the{" "}
                                <Modal header="Terms of Service" buttonText="Terms of Service and Privacy Policy">
                                    <LegalAccordion />
                                </Modal>
                            </Checkbox>
                            <Center w="100%">
                                <Button colorScheme="green" mt={5} type="submit">
                                    Submit
                                </Button>
                            </Center>
                        </Form>
                    </Formik>
                ) : (
                    <>
                        <Center>
                            <Box>
                                <Text mb={5}>
                                    Thank you for providing us with your information! A verification email will be sent
                                    to the email you provided
                                    <br /> If you do not see an email from us within the next 24 hours, please check
                                    your spam folder
                                </Text>
                                <Text mb={5}>
                                    Please click the link within 72 hours to setup your password complete your account
                                    registration
                                </Text>
                            </Box>
                        </Center>
                        <Container maxW="container.lg">
                            <NextLink href="" passHref replace>
                                <Link>Resend Email</Link>
                            </NextLink>
                        </Container>
                    </>
                )}
            </AuthLayout>
            <Center mt={5}>
                <NextLink href="/login" passHref replace>
                    <Link>Go to login</Link>
                </NextLink>
            </Center>
        </>
    );
};

export default EmployerOnboarding;
