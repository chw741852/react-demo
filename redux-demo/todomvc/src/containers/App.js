/**
 * Created by caihongwei on 02/05/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions';

const App = ({ todos, actions }) => (
    <div>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
    </div>
);

App.propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

const mapStateToProp = state => ({
    todos: state.todos
});

const mapDispatchToProp = dispath => ({
    actions: bindActionCreators(TodoActions, dispath)
});

export default connect(
    mapStateToProp,
    mapDispatchToProp
)(App)
