import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItemComp from '../menu-item/menu-item.component';
import './directory.styles.scss';

const DirectoryComp = ({ sections }) => (
    <div className='directory-menu'>
       {
           sections.map(({id, ...otherProps}) => (
               <MenuItemComp key = {id} {...otherProps}/>                        
           ))
       }
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(DirectoryComp);