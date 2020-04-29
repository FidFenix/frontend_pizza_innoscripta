import React from 'react';
import './category-preview.styles.scss'
import ProductItem from '../product-item/product-item.component';

const CategoryPreview = ({title, items}) => (
    <div className = 'category-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 4)
                .map((item) => (
                    <ProductItem key={item.id} item={item}>
                    </ProductItem>  
                ))
            }
        </div>
    </div>
);
export default CategoryPreview;