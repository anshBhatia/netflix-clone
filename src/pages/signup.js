import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../components/form';
import { FirebaseContext } from '../context/firebase';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import * as Routes from '../constants'

export default function SignUp(){
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [ name, setName ] = useState('');
    const [ emailAddress, setEmailAddresss ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');
    const isInvalid = name === '' || password === ''|| emailAddress === '';
    const handleSignUp = event => {
        event.preventDefault();
        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result)=>{
                result.user.updateProfile({
                    displayName: name,
                    photoURL: Math.floor(Math.random*5)+1
                });
            })
            .then(()=>{
                history.push(Routes.BROWSE);
            })
            .catch((error)=>{
                setName('');
                setEmailAddresss('');
                setPassword('');
                setError(error.message);
            });
    };
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}            
                    <Form.Base onSubmit={handleSignUp} method="POST">
                        <Form.Input
                            placeholder ="Name"
                            value={name}
                            onChange={({target})=>setName(target.value)}/>
                        <Form.Input
                            placeholder ="Email Address"
                            value={emailAddress}
                            onChange={({target})=>setEmailAddresss(target.value)}/>
                        <Form.Input
                            placeholder ="Password"
                            type="password"
                            value={password}
                            onChange={({target})=>setPassword(target.value)}/>
                        <Form.Submit disabled={isInvalid} type="submit">Sign Up</Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        Already a user?<Form.Link to="/signin">Sign In.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                    </Form.TextSmall>
                </Form>
                
            </HeaderContainer>
            <FooterContainer/>
        </>
    );
}