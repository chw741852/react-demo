import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ onClick, todos }) => (
    <ul>
        {todos.map(todo => (
            <Todo key={todo.id} {...todo} onClick={() => onClick(todo.id)}/>
        ))}
    </ul>
);

TodoList.propTypes = {
    onClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired
};

export default TodoList;
