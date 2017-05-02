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

export default function todos(state = initState, actions) {
    switch (actions.type) {
        case types.ADD_TODO:
            return [
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                }
            ]
    }
}
