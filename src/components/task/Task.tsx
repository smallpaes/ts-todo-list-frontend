import { FC, ReactElement } from 'react';

import { Box } from '@mui/material';
import TaskHeader from './TaskHeader';
import TaskDescription from './TaskDescription';
import TaskFooter from './TaskFooter';

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
      p={2}
      sx={{
        backgroundColor: 'background.paper',
      }}
    >
      <TaskHeader />
      <TaskDescription />
      <TaskFooter />
    </Box>
  );
};

export default Task;
