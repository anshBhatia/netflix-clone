import React from 'react';
import { Item, Inner, Container, Pane, Title, SubTitle, Image } from './styles/jumbotron';

export default function Jumbotron({children, direction='row', ...restProps}) {
  return (
    <Item>
      <Inner direction={direction}>{children}</Inner>
    </Item>
    
  );
}

Jumbotron.Container = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>
}


Jumbotron.Pane = ({ children, ...restProps }) => {
  return <Pane {...restProps}>{children}</Pane>
}


Jumbotron.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>
}

Jumbotron.SubTitle = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>
}

Jumbotron.Image = ({ children, ...restProps }) => {
  return <Image {...restProps}/>;
}
