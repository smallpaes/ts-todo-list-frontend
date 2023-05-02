import { FC, ReactElement, useState } from 'react';

import { Box, Typography, Stack } from '@mui/material';
import TaskInputField from './TaskInputField';
import TaskDateField from './TaskDateField';
import TaskSelectField from './TaskSelectField';
import { Status } from './enums/Status';
import { Priority } from './enums/Priority';
import dayjs, { Dayjs } from 'dayjs';

const CreateTaskForm: FC = (): ReactElement => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [date, setDate] = useState<Dayjs | null>(dayjs());
  const [status, setStatus] = useState<string>(Status.TODO);
  const [priority, setPriority] = useState<string>(Priority.NORMAL);
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
          onChange={(e) => setTitle(e.target.value)}
        />
        <TaskInputField
          id="description"
          name="description"
          label="description"
          placeholder="Task Description"
          rows={4}
          multiline
          onChange={(e) => setDescription(e.target.value)}
        />
        <TaskDateField value={date} onChange={(date) => setDate(date)} />
        <Stack direction="row" spacing={2} width="100%">
          <TaskSelectField
            value={status}
            label="Status"
            name="status"
            onChange={(e) => setStatus(e.target.value as Status)}
            options={[
              { value: Status.TODO, label: Status.TODO },
              { value: Status.IN_PROGRESS, label: Status.IN_PROGRESS },
            ]}
          />
          <TaskSelectField
            value={priority}
            label="Priority"
            name="priority"
            onChange={(e) => setPriority(e.target.value as Priority)}
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
