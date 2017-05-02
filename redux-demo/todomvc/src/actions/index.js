/**
 * Created by caihongwei on 02/05/2017.
 */

import * as types from '../constants/ActionTypes';

export const addTodo = text => ({
    type: types.ADD_TODO,
    text
});
