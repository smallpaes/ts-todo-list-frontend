import { FC, ReactElement } from 'react';

import { Box, Switch, FormControlLabel, Button } from '@mui/material';
import ITaskFooter from './interfaces/ITaskFooter';
import { Status } from '../taskForm/enums/Status';

const TaskFooter: FC<ITaskFooter> = ({
  id,
  status,
  onChange = (e) => console.log(e),
  onClick = (e) => console.log(e),
}): ReactElement => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        label="In Progress"
        control={
          <Switch
            checked={status === Status.IN_PROGRESS}
            color="warning"
            onChange={(e) => onChange(e)}
          />
        }
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: '#ffffff' }}
        onClick={(e) => onClick(e)}
      >
        Make As Done
      </Button>
    </Box>
  );
};

export default TaskFooter;
