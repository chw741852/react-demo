/**
 * Created by caihongwei on 02/05/2017.
 */
import * as types from '../constants/ActionTypes';

const initState = [
    {
        text: 'Use Redux',
        completed: false,
        id: 0
    }
];

export default function todos(state = initState, action) {
    switch (action.type) {
        case types.ADD_TODO:
            return [
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    completed: false,
                    text: action.text
                },
                ...state
            ];
        case types.EDIT_TODO:
            return state.map(todo =>
                todo.id === action.id ?
                    {...todo, text: action.text} : todo
            );
        case types.COMPLETE_TODO:
            return state.map(todo =>
                todo.id === action.id ?
                    {...todo, completed: !todo.completed} : todo
            );
        case types.COMPLETE_ALL:
            const areAllMarket = state.every(todo => todo.completed);
            return state.map(todo => ({
                ...todo, completed: !areAllMarket
            }));
        default:
            return state;
    }
}
