import React from 'react';

import { Link } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItemComp = ({title, subtitle, size, imageUrl}) => (
    <div className={`${size} menu-item`}>
        
        <div className='background-image'
             style= {{
                 background:`url(${imageUrl})` 
             }}
        >    <Link to='/products'>
            <div className='content'>
                <h2 className='title'>{title.toUpperCase()}</h2>
                <span className='subtitle'>{subtitle.toUpperCase()}</span>
            </div>
            </Link>
        </div>
        
    </div>
)

export default MenuItemComp;