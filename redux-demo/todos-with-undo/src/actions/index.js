/**
 * Created by caihongwei on 26/04/2017.
 */

let nextNodeId = 0;

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: nextNodeId++,
    text
});

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
});

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});
