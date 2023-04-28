import { FC, ReactElement } from 'react';
import dayjs from 'dayjs';

import { Grid, Box } from '@mui/material';

const TaskArea: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4} textAlign="center">
        <h1>Task Dashboard</h1>
        <h3>{dayjs().format('dddd, LL')}</h3>
      </Box>
      <Grid container display="flex" justifyContent="center">
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <Box>Task Counter</Box>
          <Box>Task Counter</Box>
          <Box>Task Counter</Box>
        </Grid>
        <Grid item display="flex" flexDirection="column" md={8} xs={10} mb={8}>
          <Box>Task Description</Box>
          <Box>Task Description</Box>
          <Box>Task Description</Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TaskArea;
