import { createSelector } from 'reselect';

const selectShop = (state) => state.productsStore;   //this name is the mapped in teh root-reducer

export const selectProducts = createSelector(
    [selectShop],
    product => product.products
);

export const selectProductForPreview = createSelector(
    [selectProducts],
    product => Object.keys(product).map((key) => product[key])
);

export const selectProductsCategory = selectionUrlParam => 
    createSelector(
        [selectProducts],
        product => product[selectionUrlParam]
    );