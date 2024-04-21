import Profile from '../components/profile/Profile';
import { Box, rem, Stack } from '@mantine/core';
import BlogPostStack from '../components/blogposts/BlogPostStack';

const Home = () => {
    return (
        <Stack py={20} w={'80%'} mx={'auto'} gap={rem(20)}>
            <Profile />
            <Box mt={20}>
                <BlogPostStack />
            </Box>
        </Stack>
    );
};

export default Home;
