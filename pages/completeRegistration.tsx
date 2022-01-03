import { UnlockIcon, LockIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Input, InputGroup, InputLeftElement, InputRightElement, Text } from "@chakra-ui/react";
import { Formik, Form, useField } from "formik";
import React, { useState } from "react";
import AuthLayout from "../components/layouts/AuthLayout";
import PasswordInput from "../components/UI/Inputs/PasswordInput";

const CompleteRegistration = (props: any) => {
    const [showPassword, setShowPassword] = useState(false);
    const handlePasswordClick = () => setShowPassword(!showPassword);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleConfirmPasswordClick = () => setShowConfirmPassword(!showConfirmPassword);

    const setPasswordHandler = (values: any) => {
        console.log(values);
    };

    return (
        <AuthLayout title="Complete Registration" size={{ base: "90%", xl: "50%" }}>
            <Box>
                <Text mb={5}>Thank you for verifying your email address! Please set your password now</Text>
                <Formik initialValues={{ password: "" }} onSubmit={values => setPasswordHandler(values)}>
                    <Form>
                        <InputGroup my={5}>
                            <InputLeftElement
                                pointerEvents="none"
                                children={
                                    showPassword ? <UnlockIcon color="gray.300" /> : <LockIcon color="gray.300" />
                                }
                            />
                            <Input name="password" type={showPassword ? "text" : "password"} placeholder="Password" />
                            <InputRightElement width="4.5rem">
                                <Button h="1.75rem" size="sm" onClick={handlePasswordClick}>
                                    {showPassword ? "Hide" : "Show"}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={
                                    showConfirmPassword ? (
                                        <UnlockIcon color="gray.300" />
                                    ) : (
                                        <LockIcon color="gray.300" />
                                    )
                                }
                            />
                            <Input
                                name="password"
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm Password"
                            />
                            <InputRightElement width="4.5rem">
                                <Button h="1.75rem" size="sm" onClick={handleConfirmPasswordClick}>
                                    {showConfirmPassword ? "Hide" : "Show"}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <Center w="100%">
                            <Button colorScheme="green" mt={5} size="lg" type="submit">
                                Register
                            </Button>
                        </Center>
                    </Form>
                </Formik>
            </Box>
        </AuthLayout>
    );
};

export default CompleteRegistration;
