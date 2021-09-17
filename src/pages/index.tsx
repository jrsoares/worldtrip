import { Container } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <Container width="1440px">
      <Header />
      <Banner />
    </Container>
  );
}
