import React from 'react';
import { Container, Input, Button, Text, Break } from './styles/opt-form';

export default function OptForm({ children, ...restProps }) {
    return <Container { ...restProps }>{children}</Container>
}

OptForm.Input = function FormInput({ ...restProps }){
    return <Input { ...restProps } />;
}

OptForm.Button = function FormButton({ children, ...restProps }) {
    return(
        <Button { ...restProps }>
            {children}<img src="/images/icons/chevron-right.png" alt="Try now!"/>
        </Button>
    );
}

OptForm.Text = function FormText({ children, ...restProps }) {
    return <Text { ...restProps }>{children}</Text>;
}

OptForm.Break = function FormBreal({ ...restProps }){
    return <Break { ...restProps }/>
}