import React, { useState, useEffect } from "react";
import { Header } from "../components/header";
import TextSection from "../components/TextSection";
import { About } from "../components/about";
import { Gallery } from "../components/gallery";
import { Team } from "../components/Team";
import JsonData from "../data/data.json";

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
    console.log("hi");
  }, []);

  return (
    <div>
      HELLO
      <Header data={landingPageData.Header} /> 
      {landingPageData.Academic ?
        landingPageData.Academic.map(data => (
        <>
          <TextSection title={data.title} paragraph={data.paragraph} id={data.id} /> 
        </>)) 
        : "Loading..."
      }
      <About data={landingPageData.About} link="https://www.youtube.com/embed/N9Acz7egQyA" />
      <Gallery data={landingPageData.Gallery} />
      <Team data={landingPageData.Team} />
    </div>
  );
};

export default Home;
