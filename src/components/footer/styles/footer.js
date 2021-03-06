  
import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  padding: 70px 45px 0px;
  margin: auto;
  max-width: 1000px;
  background-color: rgba(0,0,0,.75);
  flex-direction: column;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 15px;
  margin: 0 50px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin: 0 50px;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin: 0 50px;
  margin-top: 60px;
  margin-bottom: 50px
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;