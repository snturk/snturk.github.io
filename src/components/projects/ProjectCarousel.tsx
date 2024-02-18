import { useEffect, useState } from "react";
import { ProjectModel } from "./types";
import axios from "axios";
import { Title, rem } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Project from "./Project";
import classes from "./ProjectCarousel.module.css";

const ProjectCarousel = () => {
  const [projects, setProjects] = useState<ProjectModel[]>([]);
  const slides = projects.map((project: ProjectModel, index: number) => (
    <Carousel.Slide key={project.name}>
      <Project project={project} />
    </Carousel.Slide>
  ));

  const fetchProjects = () => {
    const githubUrl = "https://api.github.com/users/snturk/repos";
    axios.get(githubUrl).then((response) => {
      const filteredProjects = response.data.filter(
        (project: ProjectModel) => !project.fork && project.stargazers_count > 0
      );

      filteredProjects.sort((a: ProjectModel, b: ProjectModel) => {
        return b.stargazers_count - a.stargazers_count;
      });
      setProjects(filteredProjects);
    });
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      <Title order={2} mb={10}>
        Projects
      </Title>
      <Carousel
        withIndicators
        w={"100%"}
        slideSize="33.3333%"
        slideGap={"md"}
        loop
        align="start"
        styles={{
          indicators: {
            bottom: rem(-20),
          },
        }}
      >
        {projects && slides}
      </Carousel>
    </>
  );
};

export default ProjectCarousel;
