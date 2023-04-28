import { FC, ReactElement } from 'react';

import { Box, Typography, Stack } from '@mui/material';
import TaskInputField from './TaskInputField';

const CreateTaskForm: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Typography mb={2} component="h2" variant="h6" color="text.primary">
        Create A Task
      </Typography>
      <Stack spacing={2} width="100%">
        <TaskInputField
          id="title"
          name="title"
          label="title"
          placeholder="Task Title"
        />
        <TaskInputField
          id="description"
          name="description"
          label="description"
          placeholder="Task Description"
          rows={4}
          multiline
        />
      </Stack>
    </Box>
  );
};

export default CreateTaskForm;
