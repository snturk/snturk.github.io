import React from "react";
import { Box, Group, Stack, rem } from "@mantine/core";
import Links from "../links/Links";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <Stack w={rem(800)}>
      <Box className={classes.profile}>
        <Group className={classes.avatarGroup}>
          <img
            src="https://avatars.githubusercontent.com/u/41567673?v=4"
            alt="Profile"
            style={{ width: 100, height: 100, borderRadius: 100 }}
          />
          <h2 className={classes.fullName} style={{ margin: 0 }}>
            Muratcan Şentürk
          </h2>
        </Group>
        <Box className={classes.description}>
          Hello 🙋🏽, I’m a software engineer. This is my personal website where
          you can find projects and latest blog post links.
        </Box>
      </Box>
      <Box className={classes.links}>
        <Links />
      </Box>
    </Stack>
  );
};

export default Profile;
