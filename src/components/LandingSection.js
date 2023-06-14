import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Lai!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365">
    <Avatar size="2xl" src=" https://i.pravatar.cc/150?img=7" />
    {""}
<VStack>
  <Heading as="h6" size="xs">{greeting}</Heading>
  <Heading as="h2" size="xl">{bio1}</Heading>
  <Heading as="h2" size="xl">{bio2}</Heading>
</VStack>
  </FullScreenSection>
);

export default LandingSection;
