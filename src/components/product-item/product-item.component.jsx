import React from 'react';

import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import CustomButtonComp from '../custom--button/custom-button.component';

import './product-item.styles.scss';

const ProductItemComp = ({ item, addItem}) => {
    const {name, price, imageUrl } = item;
    return(
    <div className='product-item'>
        <div 
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            >
        </div>
        <div className='product-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
        </div>
        <CustomButtonComp onClick = {()=> addItem(item)} inverted >
            Add to the Cart
        </CustomButtonComp>
    </div>
)}

const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(ProductItemComp);