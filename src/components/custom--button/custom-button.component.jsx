import React from 'react';

import './custom-button.styles.scss';

const CustomButtonComp = ({
    children,
    isGoogleSignIn, 
    inverted,
     ...otherProps
    }) => (
    <button 
        className = {`${inverted? 'inverted':''} 
                      ${isGoogleSignIn? 'google-sign-in':''} custom-button`} 
                      {...otherProps}
        >
        {children}
    </button>
);

export default CustomButtonComp;