/**
 * Created by caihongwei on 03/05/2017.
 */
import { combineReducers } from 'redux';
import todos from './todos';

const rootReducer = combineReducers({
    todos
});

export default rootReducer;
