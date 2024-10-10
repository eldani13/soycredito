import React from "react";
import Slider from "../components/layouts/Slider";
import Whatsapp from "../components/buttons/Whatsapp";
import Header from "../components/layouts/Header";
import Cards from "../components/card/Cards";
import Credit from "../components/card/Credit";
import CardsTwo from "../components/card/CardsTwo";

function Home() {
  return (
    <div>
      <Whatsapp />
      <Header />
      <Slider />
      <Credit />
      <CardsTwo />
      <Cards />
    </div>
  );
}

export default Home;
