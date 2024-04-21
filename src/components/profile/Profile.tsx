import React from 'react';
import { Box, Group, Flex, Title } from '@mantine/core';
import Links from '../links/Links';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <Flex align={'flex-end'} gap={'lg'} mx={'auto'}>
            <Box className={classes.profile}>
                <Group className={classes.avatarGroup}>
                    <img
                        src="https://avatars.githubusercontent.com/u/41567673?v=4"
                        alt="Profile"
                        style={{ width: 140, height: 140, borderRadius: 100 }}
                    />
                    <Title order={2}>Muratcan Şentürk</Title>
                </Group>
                <Box className={classes.description}>
                    Hello 🙋🏽, I’m a software engineer. This is my personal website where you can find projects and
                    latest blog post links.
                </Box>
            </Box>
            <Box className={classes.links}>
                <Links />
            </Box>
        </Flex>
    );
};

export default Profile;
