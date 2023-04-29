import { FC, ReactElement } from 'react';

import { Box, Switch, FormControlLabel, Button } from '@mui/material';
import ITaskFooter from './interfaces/ITaskFooter';

const TaskFooter: FC<ITaskFooter> = ({
  checked = false,
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
            checked={checked}
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
