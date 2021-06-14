import React from "react";
import { Link } from "react-router-dom";
import { Card, CardOverlay, ProjectLinksContainer } from "./projectCard.styles";
import { GoMarkGithub, GoLink } from "react-icons/go";

const ProjectCard = ({ title, imgSrc, stack, description, bullets, links }) => {
  console.log(imgSrc);
  return (
    <Card>
      <img src={imgSrc} alt="project" />
      <CardOverlay>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{stack}</p>
        <ProjectLinksContainer>
          <a href={links.code} target="_blank" rel="noopener noreferrer">
            <GoMarkGithub />
          </a>
          <a href={links.app} target="_blank" rel="noopener noreferrer">
            <GoLink />
          </a>
        </ProjectLinksContainer>
      </CardOverlay>
    </Card>
  );
};

export default ProjectCard;
