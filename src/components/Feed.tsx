import React from "react";
import { Box } from "@mui/material";
import { Posts } from "./Posts";

export const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
    </Box>
  );
};
