import React from "react";
import { HeroSection, Title, Description, Iama, NextPage } from "./heading.style";
import Typewriter from "typewriter-effect";

import "../../assets/down-arrow-svgrepo-com.svg" 
const Heading = () => {
  
  return (
    <HeroSection>
      <Title>Luis A. Flores</Title>
      <Iama>
        I am a 
        <span>
          <Typewriter
            onInit={(tw) => {
              tw.typeString("Front-End Developer.")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Back-End Developer.")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Full-Stack Developer.")
                .stop()
                .start();
            }}
          />
        </span>
      </Iama>
      <Description>
        Looking to join a team with a passion for building products that have a
        positive impact on people's lives. I work with Javascript, React, Node
        and other technologies to build quality, scalable products. Based in
        Denver, CO.
      </Description>
      
      <NextPage ></NextPage>
    </HeroSection>

  );
};

export default Heading;
