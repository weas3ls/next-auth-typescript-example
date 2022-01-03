import { Button, Center, InputGroup, InputLeftElement, InputRightElement, Link, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import NextLink from "next/link";
import AuthLayout from "../components/layouts/AuthLayout";
import Input from "../components/UI/Inputs/Input";
import { UnlockIcon, LockIcon, EmailIcon } from "@chakra-ui/icons";

const Login = () => {
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [passwordIsValid, setPasswordIsValid] = useState(true);
    const [formIsValid, setFormIsValid] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const handlePasswordClick = () => setShowPassword(!showPassword);

    const loginHandler = (values: any) => {
        if (!emailIsValid && !passwordIsValid) {
            console.log("Whatcha doin");
        } else {
            setFormIsValid(true);
        }
    };

    return (
        <>
            <AuthLayout title="Welcome back!" size={{ base: "90%", xl: "50%" }}>
                <Formik initialValues={{ email: "", password: "" }} onSubmit={values => loginHandler(values)}>
                    <Form>
                        <label htmlFor="email">Email</label>
                        <InputGroup mb={5}>
                            <InputLeftElement pointerEvents="none" children={<EmailIcon color="gray.300" />} />
                            <Input px="2.5rem" type="email" name="email" id="email" placeholder="Email" />
                        </InputGroup>
                        <label htmlFor="password">Password</label>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={
                                    showPassword ? <UnlockIcon color="gray.300" /> : <LockIcon color="gray.300" />
                                }
                            />
                            <Input
                                px="2.5rem"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder="Password"
                            />
                            <InputRightElement width="4.5rem">
                                <Button h="1.75rem" size="sm" onClick={handlePasswordClick}>
                                    {showPassword ? "Hide" : "Show"}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <Text mt={5}>
                            Forgot your password?{" "}
                            <NextLink href="/forgotPassword" passHref replace>
                                <Link>Click here</Link>
                            </NextLink>
                        </Text>
                        <Center w="100%">
                            <Button colorScheme="green" mt={5} size="lg" type="submit">
                                Login
                            </Button>
                        </Center>
                    </Form>
                </Formik>
            </AuthLayout>
            <Text mt={5} align="center">
                Don't have an account?{" "}
                <NextLink href="/selectAccountType" passHref>
                    <Link>Register</Link>
                </NextLink>
            </Text>
        </>
    );
};

export default Login;
