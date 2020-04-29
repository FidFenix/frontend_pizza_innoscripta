import React, {Component} from 'react';

import './sign-in.styles.scss';
import CustomButtonComp from '../custom--button/custom-button.component';
import FormInputComp from '../form-input/form-input.component';

class SignInComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = async event=> {
        event.preventDefault(); // to prevent submitting

        const {email, password} = this.state;
        this.setState({email:'', password:''});
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})  //like a mirror, dinamically
    } 
    render() {
        return(
            <div className='sign-in'>
                <h2 className = 'title'>I already have an Account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInputComp
                        name='email' 
                        type='email' 
                        value={this.state.email}
                        handleChange = {this.handleChange}
                        label='email'
                        required
                    ></FormInputComp>
                    <FormInputComp 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        label='password'
                        required
                        handleChange = {this.handleChange}
                    ></FormInputComp>
                    <div className='buttons'>
                        <CustomButtonComp type="submit">Sign In</CustomButtonComp>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignInComp;