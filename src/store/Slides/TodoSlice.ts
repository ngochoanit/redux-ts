import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { RootState } from '../store';

export interface ITodoItem {
  id: string;
  title: string;
  complete: boolean;
}
export interface TodoState {
  todoList: ITodoItem[];
}
const initialState: TodoState = {
  todoList: [
    { id: uuidv4(), title: 'todo 1', complete: true },
    { id: uuidv4(), title: 'todo 2', complete: false },
    { id: uuidv4(), title: 'todo 3', complete: false },
  ],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addNewTodo: (state, action: PayloadAction<string>) => {
      state.todoList.push({
        id: uuidv4(),
        title: action.payload,
        complete: false,
      });
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.filter(
        (item) => item.id !== action.payload,
      );
    },
    editTodo: (state, action: PayloadAction<ITodoItem>) => {
      state.todoList = state.todoList.map((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
        }
        return item;
      });
    },
    markCompleted: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.map((item) => {
        if (item.id === action.payload) {
          item.complete = !item.complete;
        }
        return item;
      });
    },
  },
});
export const selectTodoList = (state: RootState) => state.todoReducer.todoList;
export const { addNewTodo, deleteTodo, editTodo, markCompleted } =
  todoSlice.actions;
export default todoSlice.reducer;
