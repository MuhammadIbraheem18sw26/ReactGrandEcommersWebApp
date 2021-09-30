import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButtom from '../custom-button/Custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            email: "",
            password: ""
        })

    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign In with an email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label="Email" name="email" type="email" value={this.state.email} handleChange={this.handleChange} required />


                    <FormInput
                        label="Password" name="password" type="password" handleChange={this.handleChange} value={this.state.password} required />
                    <div className='buttons'>
                        <CustomButtom type="submit" >Sign In</CustomButtom>
                        <CustomButtom onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButtom>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;