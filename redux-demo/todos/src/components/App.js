/**
 * Created by caihongwei on 24/04/2017.
 */
import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
    <div>
        <AddTodo/>
        <VisibleTodoList/>
    </div>
);

export default App;