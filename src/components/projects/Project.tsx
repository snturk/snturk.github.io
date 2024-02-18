import { Box, Button, Paper, Text, Title } from "@mantine/core";
import { ProjectModel } from "./types";
import classes from "./Project.module.css";

type ProjectProps = {
  project: ProjectModel;
};

const Project = ({ project }: ProjectProps) => {
  const { name, description, html_url } = project;

  return (
    <Paper className={classes.projectCard}>
      <Box>
        <Title className={classes.name} size="xs">
          {name}
        </Title>
        <Text className={classes.description}>{description}</Text>
      </Box>
      <Button
        variant="white"
        color="dark"
        onClick={() => window.open(html_url, "_blank")}
      >
        View Project
      </Button>
    </Paper>
  );
};

export default Project;
