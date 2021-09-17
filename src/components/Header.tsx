import { Flex, Image } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      Width="1440px"
      alignItems="center"
      justifyContent="center"
      padding="27"
    >
      <Image src="/assets/Logo.svg" alt="Logo" />
    </Flex>
  );
}
