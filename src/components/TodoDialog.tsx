import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { editTodo, ITodoItem } from '../store/Slides/TodoSlice';
import { useState, useEffect } from 'react';
import { useAppDispatch } from '../store';

const TodoDialog = ({
  isOpen,
  handleClose,
  data,
}: {
  isOpen: boolean;
  handleClose: () => void;
  data: ITodoItem;
}) => {
  const dispatch = useAppDispatch();

  const [inputData, setInputData] = useState<string>('');

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    data.title = event.target.value;
  };
  const handleUpdateTodo = () => {
    dispatch(editTodo({ ...data, title: inputData }));
    setInputData('');
    handleClose();
  };
  return (
    <div>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            label="Todo title"
            type="text"
            fullWidth
            value={data.title}
            variant="standard"
            onChange={handleOnChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpdateTodo}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TodoDialog;
