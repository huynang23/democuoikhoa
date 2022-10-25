import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const Loading = () => {
  return (
    <div>
      <Box>
        <Grid container>
          {Array.from(new Array(6)).map((x, index) => (
            <Grid item key={index} xs={12} sm={6} md={3} lg={4}>
              <Box padding={1}>
                <Skeleton variant="rect" width={285} height={180} />
                <Skeleton width={285} />
                <Skeleton width="60%" />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Loading;
