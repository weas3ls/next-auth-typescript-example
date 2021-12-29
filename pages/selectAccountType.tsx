import { Center, Icon, Link, Text, Wrap } from "@chakra-ui/react";
import React from "react";
import { FaBriefcase, FaUserGraduate } from "react-icons/fa";
import NextLink from "next/link";
import AuthLayout from "../components/layouts/AuthLayout";

const SelectAccountType = () => {
    return (
        <AuthLayout title="First, tell us who you are">
            <Wrap w="100%" spacing={{ base: "5rem", md: "10rem", xl: "15rem" }} justify="center">
                <Center flexDirection="column" textAlign="center">
                    <NextLink href="/studentOnboarding" passHref>
                        <Link>
                            <Icon as={FaUserGraduate} boxSize="6em" />
                            <Text mt={3}>I am a student</Text>
                        </Link>
                    </NextLink>
                </Center>
                <Center flexDirection="column" textAlign="center">
                    <NextLink href="/employerOnboarding" passHref>
                        <Link>
                            <Icon as={FaBriefcase} boxSize="6em" />
                            <Text mt={3}>I am an employer</Text>
                        </Link>
                    </NextLink>
                </Center>
            </Wrap>
        </AuthLayout>
    );
};

export default SelectAccountType;
