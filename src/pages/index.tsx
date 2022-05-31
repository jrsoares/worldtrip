import { Container } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import TravelTypes from "../components/TravelTypes";

export default function HomePage() {
  return (
    <Container maxW="1440px" p={0}>
      <Header />
      <Banner />
      <Container maxW="1240px">
      <TravelTypes/>
      </Container>
    </Container>
  );

}
