import { FC, ReactElement } from 'react';

import { Box } from '@mui/material';
import TaskHeader from './TaskHeader';
import TaskDescription from './TaskDescription';

const Task: FC = (props): ReactElement => {
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      border="1px solid"
      borderRadius="8px"
      borderColor="error.light"
      p={4}
      sx={{
        backgroundColor: 'background.paper',
      }}
    >
      <TaskHeader />
      <TaskDescription />
    </Box>
  );
};

export default Task;
