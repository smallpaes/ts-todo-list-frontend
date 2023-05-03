import { FC, ReactElement } from 'react';
import dayjs from 'dayjs';

import { Grid, Box, LinearProgress } from '@mui/material';
import TaskCounter from '../taskCounter/TaskCounter';
import Task from '../task/Task';
import { useQuery } from '@tanstack/react-query';
import taskAPI from '../../apis/task';
import { Status } from '../taskForm/enums/Status';

const TaskArea: FC = (): ReactElement => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['tasks'],
    queryFn: taskAPI.getTasks,
  });

  return (
    <Grid item md={8} px={4} xs={12}>
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
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection="column"
          md={8}
          xs={10}
          mb={8}
          gap={2}
        >
          {isLoading && <LinearProgress />}
          {isError && (
            <Box textAlign="center">
              <h3>Something went wrong</h3>
            </Box>
          )}
          {!isError && data?.length === 0 && (
            <Box textAlign="center">
              <h3>No Task Yet</h3>
            </Box>
          )}
          {!isError &&
            data?.map(
              ({ id, status, title, date, description, priority }) =>
                status !== Status.DONE && (
                  <Task
                    id={id}
                    status={status}
                    key={id}
                    title={title}
                    description={description}
                    date={new Date(date)}
                    priority={priority}
                  />
                ),
            )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TaskArea;
