/**
 * Created by caihongwei on 25/04/2017.
 */

import { connect } from 'react-redux';
import * as actions from '../actions';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => ({
    active: state.visibilityFilter === ownProps.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(actions.setVisibilityFilter(ownProps.filter));
    }
});

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink;
