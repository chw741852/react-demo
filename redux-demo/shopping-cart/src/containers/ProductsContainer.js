/**
 * Created by caihongwei on 12/05/2017.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductsContainer extends Component {
    static propTypes = {
        products: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired
        })).isRequired,
        addToCart: PropTypes.func.isRequired
    };

    render() {
        return (
            <ProductsList title="Products"/>
        )
    }
}