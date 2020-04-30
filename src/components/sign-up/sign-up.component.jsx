import React, {Component} from 'react';

import CustomButtonComp from '../custom--button/custom-button.component';
import FormInputComp from '../form-input/form-input.component';

import { authenticationService } from '../../services/user/authentication.service';

import './sign-up.styles.scss';

class SignUpComp extends Component {
    constructor(props){
        super(props);
        this.state = {
            fullName: '',
            email: '',
            password: '',
            confirmPassword:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {fullName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }
        
        try {
            await authenticationService.signup(
                fullName,
                email,
                password
            );


            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }catch(error) {
            console.log(error);
        }
    };

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInputComp
                        type = 'text'
                        name = 'fullName'
                        value = {displayName}
                        onChange={this.handleChange}
                        label='Full Name'
                        required
                    />
                    <FormInputComp
                        type = 'email'
                        name = 'email'
                        value = {email}
                        onChange={this.handleChange}
                        label='email'
                        required
                    />
                    <FormInputComp
                        type = 'password'
                        name = 'password'
                        value = {password}
                        onChange={this.handleChange}
                        label='password'
                        required
                    />
                    <FormInputComp
                        type = 'password'
                        name = 'confirmPassword'
                        value = {confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButtonComp type='submit'>SIGN UP</CustomButtonComp>
                    
                </form>
            </div>
        )
    }
}

export default SignUpComp;