import React, { Component } from 'react';

import './directory.styles.scss';

import MenuItemComp from '../menu-item/menu-item.componeent';

clas DirectoryComp extend Component{
    constructor(props) {
        super(props);
        this.state = {
            sections = [
                {
                    title: 'Classical',
                    imgUrl: 'https://images.freeimages.com/images/large-previews/e85/pizza-1325642.jpg';
                    id: 1,
                    linkUrl: 'classical'
                }
                {
                    title: 'Italian',
                    imgUrl: 'https://as1.ftcdn.net/jpg/02/49/58/08/500_F_249580864_rMMc1mrHyC5804c6f15TSvW99ifppmxX.jpg;
                    id: 1,
                    linkUrl: 'italian'
                }
                {
                    title: 'Vegetarian',
                    imgUrl: 'https://as1.ftcdn.net/jpg/02/62/84/78/500_F_262847803_ND3nRIvWhGjo9mwTT4u16WHYUMCoJ32W.jpg';
                    id: 1,
                    linkUrl: 'vegetarian'
                }
                {
                    title: 'Home Signature',
                    imgUrl: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
                    id: 1,
                    linkUrl: 'specialty'
                }
                {
                    title: 'American',
                    imgUrl: 'https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
                    id: 1,
                    linkUrl: 'american'
                }
            ]
        }
    }
}
const DirectoryComp = ()=> (
    <div className='directory-menu'>
        <MenuItemComp/>
    </div>
)

export default DirectoryComp;