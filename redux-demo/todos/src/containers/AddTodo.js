/**
 * Created by caihongwei on 24/04/2017.
 */
import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

let AddTodo = ({ dispatch }) => {
    let input;
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return;
                }
                dispatch(addTodo(input));
                input.value = '';
            }}>
                <input ref={node => {
                    input = node;
                }}/>
                <button type="submit">Add Todos</button>
            </form>
        </div>
    )
};

AddTodo = connect()(AddTodo);

export default AddTodo;