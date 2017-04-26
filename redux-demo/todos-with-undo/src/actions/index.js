/**
 * Created by caihongwei on 26/04/2017.
 */

let nextNodeId = 0;

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: nextNodeId++,
    text
});
