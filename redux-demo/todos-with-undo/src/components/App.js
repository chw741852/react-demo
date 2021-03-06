/**
 * Created by caihongwei on 26/04/2017.
 */
import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';
import UndoRedos from '../containers/UndoRedos';

const App = () => (
    <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
        <UndoRedos/>
    </div>
);

export default App;
