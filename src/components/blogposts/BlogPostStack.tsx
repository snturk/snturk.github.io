import { useEffect, useState } from 'react';
import { BlogPostModel } from './types';
import axios from 'axios';
import BlogPost from './BlogPost';
import { Stack, Divider, Skeleton } from '@mantine/core';
import classes from './BlogPostStack.module.css';

const BlogPostStack = () => {
    const [blogPosts, setBlogPosts] = useState<BlogPostModel[]>([]);

    const fetchBlogPosts = () => {
        const githubUrl = 'https://mediumpostsapi.vercel.app/api/mcsnturk';
        axios.get(githubUrl).then((response) => {
            const blogs = response.data.dataMedium as BlogPostModel[];
            setBlogPosts(blogs);
        });
    };

    useEffect(() => {
        blogPosts.sort((a: BlogPostModel, b: BlogPostModel) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
    }, [blogPosts]);

    useEffect(() => {
        fetchBlogPosts();
    }, []);

    return (
        <>
            <Stack gap={0} className={classes.blogPostStack} py={'lg'}>
                {blogPosts.length === 0 && (
                    <>
                        <Skeleton height={200} animate />
                    </>
                )}
                {blogPosts.map((blogPost, index) => (
                    <>
                        <BlogPost key={'blogPost_' + index} blogPost={blogPost} />
                        {index !== blogPosts.length - 1 && <Divider key={'divider_' + index} my={'lg'} c={'#000'} />}
                    </>
                ))}
            </Stack>
        </>
    );
};

export default BlogPostStack;
