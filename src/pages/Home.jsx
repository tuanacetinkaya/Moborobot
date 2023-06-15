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
  }, []);

  return (
    <div>
      <Header data={landingPageData.Header} /> 
      {landingPageData.Academic ?
        landingPageData.Academic.map(data => (
        <>
          <TextSection title={data.title} paragraph={data.paragraph} id={data.id} /> 
        </>)) 
        : "Loading..."
      }
      <div className="container" id="demo">
        <h1>Demo Videos</h1>
        <h2>Mapping</h2>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe src='' title="Mapping Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <h2>Navigation</h2>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe src='' title="Navigation Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <h2>Indoor Object Avoidance</h2>
        <p>The local cost map and the local plan extend 3 meters from the robot but the global map extends 100 meters. This is because we want to be able to update the local cost map much more frequently to have dynamic obstacle avoidance capability and want to have a 100 meters global range. Since the robot cannot navigate to a place where it is outside the global costmap we set up the global map’s range of 100 meters.</p>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe src='' title="Mapping Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <h2>Outdoor Object Avoidance</h2>
        <p>Robot is also capable of outdoor mapping while avoiding obstacles.</p>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe src='' title="Object Avoidance" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
      <About data={landingPageData.About} link="https://www.youtube.com/embed/N9Acz7egQyA" />
      <Gallery data={landingPageData.Gallery} />
      <Team data={landingPageData.Team} />
    </div>
  );
};

export default Home;
