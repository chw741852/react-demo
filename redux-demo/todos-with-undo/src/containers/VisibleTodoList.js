/**
 * Created by caihongwei on 27/04/2017.
 */
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodo } from '../actions';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        default:
            throw Error('Unknown filter: ' + filter);
    }
};

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos.present, state.visibilityFilter)
});

const mapDispatchToProps = {
    onClick: toggleTodo
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList
