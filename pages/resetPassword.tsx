import { Button, Center, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import AuthLayout from "../components/layouts/AuthLayout";
import ConfirmPasswordInput from "../components/UI/Inputs/ConfirmPasswordInput";
import PasswordInput from "../components/UI/Inputs/PasswordInput";

const ResetPassword = () => {
    const resetPasswordHandler = (values: any) => {
        console.log("Hello");
    };

    return (
        <AuthLayout title="Complete Password Reset" size={{ base: "90%", xl: "50%" }}>
            <Text mb={5}>Please set your new password below! You will be automatically logged in afterwards</Text>
            <Formik
                initialValues={{ password: "", confirmPassword: "" }}
                onSubmit={values => resetPasswordHandler(values)}
            >
                <Form>
                    <PasswordInput />
                    <ConfirmPasswordInput />
                    <Center w="100%">
                        <Button colorScheme="green" mt={5} size="lg" type="submit">
                            Submit
                        </Button>
                    </Center>
                </Form>
            </Formik>
        </AuthLayout>
    );
};

export default ResetPassword;
