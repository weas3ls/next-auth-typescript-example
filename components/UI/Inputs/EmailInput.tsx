import { EmailIcon } from "@chakra-ui/icons";
import { FormControl, FormLabel, InputGroup, InputLeftElement, Input, FormErrorMessage } from "@chakra-ui/react";
import { Field } from "formik";
import React from "react";

const EmailInput = () => {
    return (
        <Field name="email">
            {({ field, form }: { field: any; form: any }) => (
                <FormControl isInvalid={form.errors.email && form.touched.email} isRequired>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none" children={<EmailIcon color="gray.300" />} />
                        <Input variant="outline" type="email" name="email" id="email" {...field} />
                    </InputGroup>
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
            )}
        </Field>
    );
};

export default EmailInput;
