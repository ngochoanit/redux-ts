import React from 'react';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
import './App.css';

function App() {
  return (
    <Container maxWidth="md">
      <Navbar></Navbar>
      <TodoForm></TodoForm>
      <Todos></Todos>
    </Container>
  );
}

export default App;
