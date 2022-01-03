import { Button, Center, Container, Flex, Link, useBreakpointValue } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { FiCheckCircle } from "react-icons/fi";
import NextLink from "next/link";

import React from "react";
import AuthLayout from "../components/layouts/AuthLayout";
import Step1 from "../components/StudentOnboarding/Step1";
import Step2 from "../components/StudentOnboarding/Step2";
import Step3 from "../components/StudentOnboarding/Step3";
import Step4 from "../components/StudentOnboarding/Step4";
import Step5 from "../components/StudentOnboarding/Step5";
import Step6 from "../components/StudentOnboarding/Step6";
import Submit from "../components/StudentOnboarding/Submit";

const content = <Flex py={4}>Text here</Flex>;

const steps = [
    { label: "Step 1", description: "Basic Information", content: <Step1 /> },
    { label: "Step 2", description: "Terms and Conditions", content: <Step2 /> },
    { label: "Step 3", description: "Personal Information", content: <Step3 /> },
    { label: "Step 4", description: "School Information", content: <Step4 /> },
    { label: "Step 5", description: "Career Interest", content: <Step5 /> },
    { label: "Step 6", description: "Confirmation", content: <Step6 /> },
];

const StudentOnboarding = () => {
    const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({ initialStep: 0 });

    const orientation = useBreakpointValue({ base: "vertical", xl: "horizontal" });

    return (
        <AuthLayout title="Student Registration">
            <Steps
                checkIcon={FiCheckCircle}
                activeStep={activeStep}
                orientation={orientation === "vertical" ? "vertical" : "horizontal"}
            >
                {steps.map(({ label, description, content }) => (
                    <Step label={label} key={label} description={description}>
                        <Container maxW="container.lg" px={[0, 2, 5]}>
                            {content}
                        </Container>
                    </Step>
                ))}
            </Steps>
            {activeStep === 6 ? (
                <>
                    <Submit />
                    <Center>
                        <Button my={6} size="sm" onClick={reset}>
                            Reset
                        </Button>
                    </Center>
                </>
            ) : (
                <Flex width="100%" justify="flex-end">
                    <Button mr="auto" size="sm" variant="ghost" onClick={prevStep} isDisabled={activeStep === 0}>
                        Prev
                    </Button>
                    <Button size="sm" onClick={nextStep}>
                        {activeStep === steps.length - 1 ? "Submit" : "Next"}
                    </Button>
                </Flex>
            )}
            <Center mt={5}>
                <NextLink href="/login" passHref replace>
                    <Link>Go to login</Link>
                </NextLink>
            </Center>
        </AuthLayout>
    );
};

export default StudentOnboarding;
