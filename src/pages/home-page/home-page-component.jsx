import React from 'react';

import './home-page.styles.scss';
import HeaderComp from '../../components/header/header.component';
import DirectoryComp from '../../components/directory/directory.component';
import FooterComp from '../../components/footer/footer.component';

const HomePage = () => (
    <div className='home'>
        <HeaderComp/>
        <DirectoryComp/>
        <FooterComp/>
    </div>
)

export default HomePage;