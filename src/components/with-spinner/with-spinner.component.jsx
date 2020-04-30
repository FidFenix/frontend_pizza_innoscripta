import React from 'react';

import {SpinnerOverlay, SpinnerContainer} from './with-snipper.style';

const WithSpinner = WrappedComponent =>  {
    const Spinner = ({isLoading, ...otherProps}) => {
        return isLoading? (
        <SpinnerOverlay>
            <SpinnerContainer></SpinnerContainer>
        </SpinnerOverlay>):
        (
            <WrappedComponent {...otherProps}></WrappedComponent>
        )
    }
    return Spinner;
}

export default WithSpinner;