import React from 'react';

import './sign-in-and-sign-up-page.styles.scss';

import SignInComp from '../../components/sign-in/sign-in.component';
import SignUpComp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignInComp/>
        <SignUpComp/>
    </div>
);

export default SignInAndSignUpPage