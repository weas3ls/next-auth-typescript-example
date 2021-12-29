import { FormControl, FormLabel, Input as ChakraInput } from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";

const Input = (props: { id: string; type: string; name: string; placeholder?: string; mb?: number; px?: any }) => {
    const [field, meta, helpers] = useField(props.name);

    return (
        <>
            <ChakraInput {...field} {...props} />
            {meta.error && meta.touched && <div>{meta.error}</div>}
        </>
    );
};

export default Input;
