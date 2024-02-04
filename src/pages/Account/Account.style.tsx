import styled from "styled-components";
import Avatar from 'react-avatar';
import Button from '../../components/Button';

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 1.8rem;
  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 
              0px 4px 5px 0px rgba(0,0,0,0.14), 
              0px 1px 10px 0px rgba(0,0,0,0.12); 
  margin: 2rem;
  padding: .2rem;
  width: 25rem;
  height: 25rem;
  max-width: 85%;
  max-height: 85%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;`;

export const CoverContainer = styled.div`
  display: flex;
  background-color: #f3f3f4;
  width: 100%;
  height: 5rem;
  border-top-left-radius:  2.18rem;
  border-top-right-radius: 2.18rem;
  border-bottom-left-radius: .3px;
  border-bottom-right-radius: .3px;
    `

export const FakeAvatar = styled(Avatar)`
  margin-top: -1.3rem;   
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;

export const LabelRow = styled.div`
display: flex;
flex-direction: row;
margin: .6rem;
padding: 0;
`

export const Label = styled.p`
font-size: 1.5rem;
margin-left: .3rem;
`;

export const Footer = styled.div`
display: flex;
flex-direction: column;
width: 90%;
margin-bottom: .8rem;
`;

export const LogoutButton = styled(Button)`
width: 0.1rem;
height: 2rem;
`;

