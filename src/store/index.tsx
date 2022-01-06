import { createSlice } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

interface ITodoItem {
  id: string;
  title: string;
  complete: boolean;
}
interface TodoState {
  todos: ITodoItem[];
}
const initialState: TodoState = {
  todos: [
    { id: '1', title: '1', complete: true },
    { id: '2', title: '2', complete: true },
    { id: '2', title: '2', complete: true },
  ],
};
const todosSlice = createSlice({
  name: 'Todos',
  initialState,
  reducers: {},
});
