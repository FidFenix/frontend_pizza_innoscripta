import React from 'react';

import ProductsOverview from '../../components/products-overview/products-overview.component'

import { Route } from 'react-router-dom';

const ProductsPage = ({match}) => (
    <div className='store-page'>
        <Route exact path={`${match.path}`} component = { ProductsOverview }></Route>
    </div>
);

export default ProductsPage;