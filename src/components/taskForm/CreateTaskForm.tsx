import { FC, ReactElement } from 'react';

import { Box, Typography, Stack } from '@mui/material';
import TaskInputField from './TaskInputField';
import TaskDateField from './TaskDateField';
import TaskSelectField from './TaskSelectField';
import { Status } from './enums/Status';
import { Priority } from './enums/Priority';

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
        <TaskDateField />
        <Stack direction="row" spacing={2} width="100%">
          <TaskSelectField
            label="Status"
            name="status"
            options={[
              { value: Status.TODO, label: Status.TODO },
              { value: Status.IN_PROGRESS, label: Status.IN_PROGRESS },
            ]}
          />
          <TaskSelectField
            label="Priority"
            name="priority"
            options={[
              { value: Priority.LOW, label: Priority.LOW },
              { value: Priority.NORMAL, label: Priority.NORMAL },
              { value: Priority.HIGH, label: Priority.HIGH },
            ]}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default CreateTaskForm;
