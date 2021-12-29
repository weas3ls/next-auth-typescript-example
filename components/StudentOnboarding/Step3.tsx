import { FormControl, FormLabel, Input, InputGroup, InputLeftAddon, Select, SimpleGrid } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";
import MultiSelect from "../UI/Inputs/MultiSelect";

import ethnicities from "./Dependencies/Ethnicities";
import languages from "./Dependencies/Languages";
import pronouns from "./Dependencies/Pronouns";

const Step3 = () => {
    const step3Handler = (values: any) => {
        console.log(values);
    };

    return (
        <Formik
            initialValues={{ mobile: "", birthDate: "", pronouns: "", ethnicity: "", firstLangue: "" }}
            onSubmit={values => step3Handler(values)}
        >
            <Form>
                <SimpleGrid columns={[1, 2]} my={5} gap={5}>
                    <FormControl isRequired>
                        <FormLabel htmlFor="mobile">Mobile</FormLabel>
                        <InputGroup>
                            <InputLeftAddon children="+1" />
                            <Input type="phone" id="mobile" placeholder="Phone number" />
                        </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="birthDate">Date of Birth</FormLabel>
                        <Input type="month" id="birthDate" placeholder="Date of Birth" />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="pronouns">Preferred Pronouns</FormLabel>
                        <Select>
                            {pronouns.map((pronoun: { value: string; label: string }) => (
                                <option value={pronoun.value} key={pronoun.value}>
                                    {pronoun.label}
                                </option>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl isRequired>
                        <MultiSelect name="ethnicity" options={ethnicities} label="Ethnicity" />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="firstLanguage">First Language</FormLabel>
                        <Select>
                            {languages.map((language: { value: string; label: string }) => (
                                <option value={language.value} key={language.value}>
                                    {language.label}
                                </option>
                            ))}
                        </Select>
                    </FormControl>
                </SimpleGrid>
            </Form>
        </Formik>
    );
};

export default Step3;
