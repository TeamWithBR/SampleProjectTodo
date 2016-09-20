import React from 'react';
import ReactDOM from 'react-dom';
import ToDoHeaderContainer from '../../containers/TodoHeaderContainer';
import TodoListContainer from '../../containers/TodoListContainer';

const Main = () => (
  <div>
    <ToDoHeaderContainer />
    <TodoListContainer />
  </div>
);

export default Main;