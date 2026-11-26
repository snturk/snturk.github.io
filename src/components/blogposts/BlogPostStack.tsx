import { useEffect, useState } from 'react';
import axios from 'axios';
import { BlogPostModel } from './types';
import BlogPost from './BlogPost';
import classes from './BlogPostStack.module.css';

const MEDIUM_API_URL = 'https://mediumpostsapi.vercel.app/api/mcsnturk';

const BlogPostStack = () => {
    const [blogPosts, setBlogPosts] = useState<BlogPostModel[] | null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios
            .get(MEDIUM_API_URL)
            .then((response) => {
                const blogs = [...(response.data.dataMedium as BlogPostModel[])];
                blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
                setBlogPosts(blogs);
            })
            .catch(() => setError(true));
    }, []);

    if (error) {
        return <div className={`glass ${classes.message}`}>Couldn’t load posts right now.</div>;
    }

    if (blogPosts === null) {
        return (
            <div className={classes.grid}>
                {[0, 1, 2].map((i) => (
                    <div key={i} className={`glass ${classes.skeleton}`} />
                ))}
            </div>
        );
    }

    return (
        <div className={classes.grid}>
            {blogPosts.map((blogPost, index) => (
                <BlogPost key={blogPost.link} blogPost={blogPost} featured={index === 0} />
            ))}
        </div>
    );
};

export default BlogPostStack;
