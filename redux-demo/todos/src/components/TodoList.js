/**
 * Created by caihongwei on 24/04/2017.
 */
import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

const TodoList = ({ todos, onTodoClick }) => (
    <ul>
        {todos.map(todo =>
            <Todo onClick={() => onTodoClick(todo.id)} {...todo} key={todo.id} />
        )}
    </ul>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,

    onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
