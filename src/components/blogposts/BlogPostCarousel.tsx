import { useEffect, useState } from "react";
import { BlogPostModel } from "./types";
import axios from "axios";
import { Carousel } from "@mantine/carousel";
import BlogPost from "./BlogPost";
import { Title, rem } from "@mantine/core";

const BlogPostCarousel = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPostModel[]>([]);
  const slides = blogPosts.map((blogPost: BlogPostModel, index: number) => (
    <Carousel.Slide key={blogPost.title}>
      <BlogPost blogPost={blogPost} />
    </Carousel.Slide>
  ));

  const fetchBlogPosts = () => {
    const githubUrl = "https://mediumpostsapi.vercel.app/api/mcsnturk";
    axios.get(githubUrl).then((response) => {
      const blogs = response.data.dataMedium as BlogPostModel[];
      blogs.sort((a: BlogPostModel, b: BlogPostModel) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
      setBlogPosts(blogs);
    });
  };

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <>
      <Title order={2} mb={10}>
        Blog Posts
      </Title>
      <Carousel
        withIndicators
        w={"100%"}
        slideSize="33.3333%"
        slideGap={"md"}
        loop
        align="start"
        styles={{
          root: {
            marginBottom: rem(20),
          },
          indicators: {
            bottom: rem(-20),
          },
        }}
      >
        {blogPosts && slides}
      </Carousel>
    </>
  );
};

export default BlogPostCarousel;
