import { LockIcon } from "@chakra-ui/icons";
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

const ConfirmPasswordInput = () => {
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleConfirmPasswordClick = () => setShowConfirmPassword(!showConfirmPassword);

    return (
        <Field name="confirmPassword">
            {({ field, form }: { field: any; form: any }) => (
                <FormControl isInvalid={form.errors.confirmPassword && form.touched.confirmPassword}>
                    <FormLabel htmlFor="confirmPassword" mt={4}>
                        Confirm Password
                    </FormLabel>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none" children={<LockIcon color="gray.300" />} />
                        <Input
                            pr="4.5rem"
                            variant="outline"
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            id="confirmPassword"
                            {...field}
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleConfirmPasswordClick}>
                                {showConfirmPassword ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
            )}
        </Field>
    );
};

export default ConfirmPasswordInput;
