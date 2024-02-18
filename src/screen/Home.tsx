import Profile from "../components/profile/Profile";
import { Box, Group } from "@mantine/core";
import ProjectCarousel from "../components/projects/ProjectCarousel";
import BlogPostCarousel from "../components/blogposts/BlogPostCarousel";

const Home = () => {
  return (
    <Group p={25}>
      <Profile />
      <Box mt={20} w={"100%"}>
        <ProjectCarousel />
      </Box>
      <Box mt={20} w={"100%"}>
        <BlogPostCarousel />
      </Box>
    </Group>
  );
};

export default Home;
