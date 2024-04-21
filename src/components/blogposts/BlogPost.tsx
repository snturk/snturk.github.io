import { Box, Title, Stack, Image, Badge, Group } from '@mantine/core';
import { BlogPostModel } from './types';
import classes from './BlogPost.module.css';

type BlogPostProps = {
    blogPost: BlogPostModel;
};

const BlogPost = ({ blogPost }: BlogPostProps) => {
    const { title, link, tags } = blogPost;

    const openLink = () => {
        window.open(link, '_blank');
    };

    return (
        <Group className={classes.blogPostCard} gap={'lg'} justify={'space-between'} onClick={openLink}>
            <Stack flex={1}>
                <Title className={classes.name} order={2} ta={'center'}>
                    {title}
                </Title>
                <Group justify={'center'} mt={10}>
                    {tags.map((tag, index) => (
                        <Badge key={index} variant={'default'} className={classes.badge}>
                            {tag}
                        </Badge>
                    ))}
                </Group>
            </Stack>
            <Box flex={1} h={'100%'} className={classes.image}>
                <Image src={blogPost.image} alt={'Blog Post Image'} w={'100%'} h={400} radius={'md'} />
            </Box>
        </Group>
    );
};

export default BlogPost;
