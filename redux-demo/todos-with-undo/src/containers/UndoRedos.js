/**
 * Created by caihongwei on 02/05/2017.
 */

import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { connect } from 'react-redux';
import UndoRedo from '../components/UndoRedo';

const mapStateToProps = (state) => ({
    canUndo: state.todos.past.length > 0,
    canRedo: state.todos.future.length > 0
});

const mapDispatchToProps = ({
    onUndo: UndoActionCreators.undo,
    onRedo: UndoActionCreators.redo
});

const UndoRedos = connect(
    mapStateToProps,
    mapDispatchToProps
)(UndoRedo);

export default UndoRedos;
