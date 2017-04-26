/**
 * Created by caihongwei on 26/04/2017.
 */

const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (state.id === action.id) {
                return {
                    ...state,
                    completed: !state.completed
                }
            }
            return state;
        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(s =>
                todo(s, action)
            );
        default:
            return state;
    }
};

export default todos;
