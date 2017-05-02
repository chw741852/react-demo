/**
 * Created by caihongwei on 02/05/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';

const UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
    <p>
        <button onClick={onUndo} disabled={!canUndo}>
            Undo
        </button>
        <button onClick={onRedo} disabled={!canRedo}>
            Redo
        </button>
    </p>
);

UndoRedo.propTypes = {
    canUndo: PropTypes.bool.isRequired,
    canRedo: PropTypes.bool.isRequired,
    onUndo: PropTypes.func.isRequired,
    onRedo: PropTypes.func.isRequired
};

export default UndoRedo;
