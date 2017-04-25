/**
 * Created by caihongwei on 25/04/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';

const Link = ({children, active, onClick}) => {
    if (active) {
        return <span>{children}</span>
    }

    return (
        <a href="#" onClick={
            e => {
                e.preventDefault();
                onClick();
            }
        }>
            {children}
        </a>
    )
};

Link.propTypes = {
    children: PropTypes.node.isRequired,
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Link;
