import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import SidebarWithHeader from "../components/layouts/DashboardLayout";
import ProfileInformation from "../components/profileInformation";

const Profile = () => {
    return (
        <SidebarWithHeader>
            <Container maxW="container.xl" pt={10}>
                <Tabs>
                    <TabList>
                        <Tab>Profile</Tab>
                        <Tab>About Me</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <ProfileInformation />
                        </TabPanel>
                        <TabPanel>About me</TabPanel>
                    </TabPanels>
                </Tabs>
                <Box></Box>
            </Container>
        </SidebarWithHeader>
    );
};

export default Profile;
