import { Box, Button, Paper, Text, Title, rem } from "@mantine/core";
import { BlogPostModel } from "./types";
import classes from "./BlogPost.module.css";

type BlogPostProps = {
  blogPost: BlogPostModel;
};

const BlogPost = ({ blogPost }: BlogPostProps) => {
  const { title, description, link } = blogPost;

  return (
    <Paper className={classes.blogPostCard}>
      <Box
        className={classes.image}
        h={rem(200)}
        style={{ backgroundImage: `url(${blogPost.image})` }}
      />
      <Box>
        <Title className={classes.name} size="xs">
          {title}
        </Title>
        <Text className={classes.description}>
          {/* description can be in html format, clear it before rendering */}
          {description.replace(/<[^>]*>?/gm, "").slice(0, 100)}...
        </Text>
      </Box>
      <Button
        mt={20}
        variant="white"
        color="dark"
        onClick={() => window.open(link, "_blank")}
      >
        View BlogPost
      </Button>
    </Paper>
  );
};

export default BlogPost;
