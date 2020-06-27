import React, {useState} from "react";
import {connect} from 'react-redux';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signUpStart} from "../../redux/user/user.actions";

import {SignUpContainer, SignUpTitle} from "./sign-up.styles";

const SignUp = ({signUpStart}) => {
    const [userCredentials, setCredentials] = useState({displayName: '', email: '', password: '', confirmPassword: ''})
    const {displayName, email, password, confirmPassword} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Password don't match!");
            return;
        }
        signUpStart({displayName, email, password})
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setCredentials({...userCredentials, [name]: value });
    };

    return (
        <SignUpContainer>
            <SignUpTitle>I do not have an account</SignUpTitle>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput name='displayName' type='text' value={displayName} handleChange={handleChange} label='Display Name' required />
                <FormInput name='email' type='email' value={email} handleChange={handleChange} label='Email' required />
                <FormInput name='password' type='password' value={password} handleChange={handleChange} label='Password' required />
                <FormInput name='confirmPassword' type='password' value={confirmPassword} handleChange={handleChange} label='Confirm Password' required />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </SignUpContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);