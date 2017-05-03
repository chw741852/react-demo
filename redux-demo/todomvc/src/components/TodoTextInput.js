/**
 * Created by caihongwei on 02/05/2017.
 */
import React, { Component } from 'react';
import PropTyps from 'prop-types';
import classnames from 'classnames';

export default class TodoTextInput extends Component {
    static propTypes = {
        onSave: PropTyps.func.isRequired,
        text: PropTyps.string,
        placeholder: PropTyps.string,
        editing: PropTyps.bool,
        newTodo: PropTyps.bool
    };

    state = {
        text: this.props.text || ''
    };

    handleSubmit = e => {
        const text = e.target.value.trim();
        if (e.which === 13) {
            this.props.onSave(text);
            if (this.props.newTodo) {
                this.setState({ text: '' });
            }
        }
    };

    handleChange = e => {
        this.setState({ text: e.target.value });
    };

    handleBlur = e => {
        if (!this.props.newTodo) {
            this.props.onSave(e.target.value);
        }
    };

    render() {
        return (
            <input className={
                classnames({
                    edit: this.props.editing,
                    'new-todo': this.props.newTodo
                })}
                   type="text"
                   placeholder={this.props.placeholder}
                   autoFocus="true"
                   value={this.props.text}
                   onBlur={this.handleBlur}
                   onChange={this.handleChange}
                   onKeyDown={this.handleSubmit} />
        )
    }
}