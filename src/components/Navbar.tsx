import { AppBar, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useAppSelector } from '../store';
import { selectTodoList } from '../store/Slides/TodoSlice';
import Todos from './Todos';

const Navbar = () => {
  const Todos = useAppSelector(selectTodoList);
  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={1}
          py={2}
        >
          <Typography variant="h6">Home</Typography>
          <Typography variant="h6">About</Typography>
          <Typography variant="h6">Total Todos: {Todos?.length}</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
