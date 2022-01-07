import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@mui/material';
import { Box } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import {
  deleteTodo,
  ITodoItem,
  markCompleted,
  selectTodoList,
} from '../store/Slides/TodoSlice';
import EditOffOutlinedIcon from '@mui/icons-material/EditOffOutlined';
import TodoDialog from './TodoDialog';
const Todos = () => {
  const Todos = useAppSelector(selectTodoList);
  const dispatch = useAppDispatch();
  const [isOpenFromDialog, setIsOpenFromDialog] = useState<boolean>(false);
  const [todoCurrent, setTodoCurrent] = useState<ITodoItem>({
    id: '',
    title: '',
    complete: false,
  });
  const handleOnEdit = (item: ITodoItem) => {
    setIsOpenFromDialog(true);
    setTodoCurrent(item);
  };
  const handleCloseFromDialog = () => {
    setIsOpenFromDialog(false);
  };
  return (
    <Box>
      <List>
        {Todos &&
          Todos.length > 0 &&
          Todos.map((todo) => (
            <ListItem key={todo.id} disablePadding>
              <ListItemIcon>
                <Checkbox
                  checked={todo.complete}
                  onClick={() => dispatch(markCompleted(todo.id))}
                ></Checkbox>
              </ListItemIcon>
              <ListItemText>{todo.title}</ListItemText>
              <Stack direction="row" spacing={2} ml={2}>
                <IconButton
                  aria-label="edit"
                  color="primary"
                  onClick={() => handleOnEdit(todo)}
                >
                  <EditOffOutlinedIcon />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  color="error"
                  onClick={() => dispatch(deleteTodo(todo.id))}
                >
                  <DeleteIcon />
                </IconButton>
              </Stack>
            </ListItem>
          ))}
      </List>
      <TodoDialog
        isOpen={isOpenFromDialog}
        handleClose={handleCloseFromDialog}
        data={todoCurrent}
      ></TodoDialog>
    </Box>
  );
};

export default Todos;
