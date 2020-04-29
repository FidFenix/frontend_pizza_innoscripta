import React from 'react';

import './menu-item.styles.scss';

const MenuItemComp = () => (
    <div className='menu-item'>
        <div className='background-image'>
            <div className='content'>
                <h2 className='title'>Title</h2>
                <span className='subtitle'>SUB-TITLE</span>
            </div>
        </div>
    </div>
)

export default MenuItemComp;