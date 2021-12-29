import { LockIcon, UnlockIcon } from "@chakra-ui/icons";
import {
    FormControl,
    FormLabel,
    InputGroup,
    InputLeftElement,
    Input,
    InputRightElement,
    Button,
} from "@chakra-ui/react";
import { Field } from "formik";
import React, { useState } from "react";

const PasswordInput = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handlePasswordClick = () => setShowPassword(!showPassword);

    return (
        <Field name="password">
            {({ field, form }: { field: any; form: any }) => (
                <FormControl isInvalid={form.errors.password && form.touched.password}>
                    <FormLabel htmlFor="password" mt={4}>
                        Password
                    </FormLabel>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents="none"
                            children={showPassword ? <UnlockIcon color="gray.300" /> : <LockIcon color="gray.300" />}
                        />
                        <Input
                            pr="4.5rem"
                            variant="outline"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            {...field}
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handlePasswordClick}>
                                {showPassword ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
            )}
        </Field>
    );
};

export default PasswordInput;
