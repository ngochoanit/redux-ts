import { Button, Stack, TextField } from '@mui/material';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useAppDispatch } from '../store';
import { addNewTodo } from '../store/Slides/TodoSlice';

const TodoForm = () => {
  const dispatch = useAppDispatch();
  const [inputData, setInputData] = useState<string>('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(event.target.value);
  };
  return (
    <Box
      my={3}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <TextField
        label="Todo Title"
        value={inputData}
        size="small"
        fullWidth
        onChange={handleInputChange}
      />
      <Stack direction="row" spacing={2} ml={2}>
        <Button
          variant="contained"
          endIcon={<AddBoxOutlinedIcon />}
          onClick={() => dispatch(addNewTodo(inputData))}
        >
          Add
        </Button>
      </Stack>
    </Box>
  );
};

export default TodoForm;
