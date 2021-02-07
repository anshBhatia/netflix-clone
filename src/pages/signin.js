import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../components/form';
import { FirebaseContext } from '../context/firebase';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import * as Routes from '../constants';

export default function SignIn(){
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [ emailAddress, setEmailAddresss ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');
    const isInvalid = password === ''|| emailAddress === '';
    const handleSignIn = event => {
        event.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(()=>{
                history.push(Routes.BROWSE);
            })
            .catch((error)=>{
                console.log(error);
                setEmailAddresss('');
                setPassword('');
                setError(error.message);
            });
    }
    return(
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignIn} method="POST">
                        <Form.Input 
                            placeholder="Email or phone number"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddresss(target.value)}/>
                        <Form.Input 
                            type="password" 
                            placeholder="Password"
                            value={password}
                            onChange={({target}) => setPassword(target.value)}/>
                        <Form.Submit disabled={isInvalid} type="submit" >Sign In</Form.Submit>
                    </Form.Base>
                    <Form.Text>
                    New to Netflix? <Form.Link to={Routes.SIGN_UP}>Sign up now.</Form.Link>
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