import React from "react";
import Slider from "../../components/Slider/hero-slider";
import HeroBottom from "./hero-bottom";
import { Helmet } from "react-helmet";
import Divider from "../../components/shared/divider";
import Clients from "./clients";
import PortoMap from "./porto-map";
import Feature from "./feature";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Porto</title>
      </Helmet>
      <Slider />
      <HeroBottom />
      <Divider />
      <Feature />
      <Divider />
      <Clients />
      <PortoMap />
    </>
  );
};

export default Home;
