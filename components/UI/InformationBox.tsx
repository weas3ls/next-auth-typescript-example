import { EditIcon } from "@chakra-ui/icons";
import { Box, Flex, Spacer, IconButton, HStack, Text, useBreakpointValue, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const InformationBox = ({ children, ...props }: { children: any; header: string; onClick: any }) => {
    const fontSize = useBreakpointValue({ base: "lg", md: "xl", lg: "3xl" });
    const iconSize = useBreakpointValue({ base: "xs", md: "sm" });

    return (
        <Box borderWidth="1px" borderRadius="lg" px={[2, 5, 10]} mb={5}>
            <Flex>
                <Text fontSize={fontSize} align="left">
                    {props.header}
                </Text>
                <Spacer />
                <IconButton size={iconSize} my="auto" aria-label="Edit" icon={<EditIcon />} onClick={props.onClick} />
            </Flex>
            <SimpleGrid columns={[1, 2]} spacingX="24px">
                {children}
            </SimpleGrid>
        </Box>
    );
};

export default InformationBox;
