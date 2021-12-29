import { FormControl, FormHelperText, FormLabel, Input, Select, SimpleGrid } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React, { useState } from "react";
import clusters from "./Dependencies/Clusters";
import schools from "./Dependencies/Schools";

const Step4 = () => {
    const [selectedCluster, setSelectedCluster] = useState("");

    const clusterHandler = (event: any) => {
        setSelectedCluster(event.target.value);
    };

    const step4Handler = (values: any) => {
        console.log(values);
    };

    return (
        <Formik
            initialValues={{ school: "", graduationDate: "", cluster: "", pathway: "" }}
            onSubmit={values => step4Handler(values)}
        >
            <Form>
                <SimpleGrid columns={[1, 2]} my={5} gap={5}>
                    <FormControl isRequired>
                        <FormLabel htmlFor="school">School</FormLabel>
                        <Select>
                            <option>Select your current school</option>
                            {schools.map((school: { name: string }) => (
                                <option value={school.name} key={school.name}>
                                    {school.name}
                                </option>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="graduationDate">Date of Graduation</FormLabel>
                        <Input type="month" id="graduationDate" placeholder="Date of Graduation" />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="cluster">Cluster</FormLabel>
                        <Select onChange={clusterHandler}>
                            <option value="">Select a cluster</option>
                            {clusters.map((cluster: { name: string }) => (
                                <option value={cluster.name} key={cluster.name}>
                                    {cluster.name}
                                </option>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="pathway">Pathway</FormLabel>
                        <Select disabled={!selectedCluster}>
                            {clusters
                                .filter(cluster => cluster.name === selectedCluster)
                                .map((cluster: { pathways: { name: string }[] }) => {
                                    return cluster.pathways.map((pathway: { name: string }) => (
                                        <option value={pathway.name} key={pathway.name}>
                                            {pathway.name}
                                        </option>
                                    ));
                                })}
                        </Select>
                        <FormHelperText mt={0}>Please select a cluster to select a pathway</FormHelperText>
                    </FormControl>
                </SimpleGrid>
            </Form>
        </Formik>
    );
};

export default Step4;
