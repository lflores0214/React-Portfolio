import React, { useState } from "react";
import {
  Container,
  ProjectTagContainer,
  ProjectsContainer,
  Tag,
} from "./projects.style";

import { projects } from "../../data/projects";
import ProjectCard from "../../components/projectCard/projectCard";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  return (
    <Container>
      <h1>PORTFOLIO</h1>
      <ProjectTagContainer>
        <Tag
          onClick={() => setFilter("all")}
          className={filter === "all" ? "active" : null}
        >
          All
        </Tag>
        <Tag
          onClick={() => setFilter("frontend")}
          className={filter === "frontend" ? "active" : null}
        >
          Front-End{" "}
        </Tag>
        <Tag
          onClick={() => setFilter("backend")}
          className={filter === "backend" ? "active" : null}
        >
          Back-End{" "}
        </Tag>
        <Tag
          onClick={() => setFilter("fullstack")}
          className={filter === "fullstack" ? "active" : null}
        >
          Full-Stack{" "}
        </Tag>
      </ProjectTagContainer>
      <ProjectsContainer>
        {projects
          .filter((project) => project.tags.includes(filter))
          .map((proj, i) => {
            return (
              <ProjectCard
                key={i}
                title={proj.title}
                imgSrc={proj.imgSrc}
                stack={proj.stack}
                description={proj.description}
                bullets={proj.bullets}
                links={proj.links}
              />
            );
          })}
      </ProjectsContainer>
    </Container>
  );
};

export default Projects;
