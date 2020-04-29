import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectProductsForPreview } from '../../redux/products/products.selectors';

import CategoryPreview from '../category-preview/category-preview.component';

import './products-overview.styles.scss';

const ProductsOverview = ({products}) => (
    <div className = 'products-overview'>
        {   
            products.map(({id, ...others}) => (
                <CategoryPreview key = { id } { ...others }/>
            ))
        }
    </div>
);

const mapToStateProps = createStructuredSelector({
    products: selectProductsForPreview
});

export default connect(mapToStateProps)(ProductsOverview);