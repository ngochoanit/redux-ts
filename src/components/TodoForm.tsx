import { Button, Stack, TextField } from '@mui/material';
import EditOffOutlinedIcon from '@mui/icons-material/EditOffOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Box } from '@mui/system';
import React from 'react';

const TodoForm = () => {
  return (
    <Box
      my={3}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <TextField
        fullWidth
        label="Todo"
        defaultValue="Small"
        size="small"
        placeholder="Enter todo"
      />
      <Stack direction="row" spacing={2} ml={2}>
        <Button variant="outlined" startIcon={<EditOffOutlinedIcon />}>
          Edit
        </Button>
        <Button variant="contained" endIcon={<AddBoxOutlinedIcon />}>
          Add
        </Button>
      </Stack>
    </Box>
  );
};

export default TodoForm;
