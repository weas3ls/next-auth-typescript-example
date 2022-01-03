import { Box, Button, Center, Link, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import NextLink from "next/link";
import AuthLayout from "../components/layouts/AuthLayout";
import EmailInput from "../components/UI/Inputs/EmailInput";

const ForgotPassword = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [email, setEmail] = useState("");

    const resetPasswordHandler = (values: any) => {
        setEmail(values.email);
        setFormSubmitted(true);
    };

    return (
        <>
            <AuthLayout title="Reset Password" size={{ base: "90%", xl: "50%" }}>
                {!formSubmitted ? (
                    <Box>
                        <Text mb={5}>
                            Forgot your password? No worries! Please provide your email and we'll get things taken care
                            of!
                        </Text>
                        <Formik initialValues={{ email: "" }} onSubmit={values => resetPasswordHandler(values)}>
                            <Form>
                                <EmailInput />
                                <Center w="100%">
                                    <Button colorScheme="green" mt={5} size="lg" type="submit">
                                        Submit
                                    </Button>
                                </Center>
                            </Form>
                        </Formik>
                    </Box>
                ) : (
                    <Box>
                        <Text>
                            A reset email has been sent to <strong>{email}</strong>
                        </Text>
                        <Text mt={4}>
                            Please check your inbox and follow the instructions in the email to reset your password
                            <br />
                            If you do not see an email from us, please check your spam or junk folder
                        </Text>

                        <Text mt={5}>Resend Email</Text>
                    </Box>
                )}
            </AuthLayout>
            <Center>
                <NextLink href="/login" passHref replace>
                    <Link mt={5}>Return to login</Link>
                </NextLink>
            </Center>
        </>
    );
};

export default ForgotPassword;
