import React, { Component } from 'react';

import './directory.styles.scss';

import MenuItemComp from '../menu-item/menu-item.component';

class DirectoryComp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            sections : [
                {
                    title: 'Classical',
                    subtitle: 'Delicious',
                    imageUrl: 'https://cdn.pixabay.com/photo/2016/03/05/20/02/appetite-1238621_960_720.jpg',
                    id: 1,
                    size: '',                   
                    linkUrl: 'classical'
                },
                {
                    title: 'Italian',
                    subtitle: 'Delicious',
                    imageUrl: 'https://cdn.pixabay.com/photo/2015/02/01/05/20/supreme-pizza-619133_960_720.png',
                    id: 1,
                    size: '',
                    linkUrl: 'italian'
                },
                {
                    title: 'Vegetarian',
                    subtitle: 'Delicious',
                    imageUrl: 'https://image.shutterstock.com/image-photo/lifted-vegetarian-pizza-slice-topping-600w-102239638.jpg',
                    id: 1,
                    size: '',
                    linkUrl: 'vegetarian'
                },
                {
                    title: 'Home Signature',
                    subtitle: 'Delicious',
                    imageUrl: 'https://cdn.pixabay.com/photo/2017/09/30/15/10/pizza-2802332_960_720.jpg',
                    id: 1,
                    size: 'large',
                    linkUrl: 'specialty'
                },
                {
                    title: 'American',
                    subtitle: 'Delicious',
                    imageUrl: 'https://cdn.pixabay.com/photo/2017/01/22/19/12/pizza-2000595_960_720.jpg',
                    id: 1,
                    size: 'large',
                    linkUrl: 'american'
                }
            ]
        }
    }
    render() {
        const { sections } = this.state;
        return(
            <div className='directory-menu'>
                {
                    sections.map(({id, ...otherProps}) => (
                        <MenuItemComp key = {id} {...otherProps}/>                        
                    ))
                }

            </div>
        )
    }
}

export default DirectoryComp;