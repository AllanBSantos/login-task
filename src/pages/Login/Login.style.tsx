import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f3f3f4;
  border-radius: 4px;
  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 
              0px 4px 5px 0px rgba(0,0,0,0.14), 
              0px 1px 10px 0px rgba(0,0,0,0.12); 
  padding: 16px; 
  width: 32rem; 
  height:32rem; 
  padding: 1rem;
`;

export const Title = styled.h2`
font-size: 2rem;
font-weight: 500;
color: #2d21de;
margin-top: 2rem;
`;
export const Label = styled.p`
font-size: 1rem;
font-weight: 500;
color: #9b9eb6;
align-self: flex-start;
margin-bottom: 0.5rem;
margin-top: 1rem;
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 85%;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem;
`;

export const ErrorLabel = styled.p`
font-size: 1rem;
font-weight: 500;
color: #f44336;
align-self: center;
margin-bottom: 0.5rem;
`;

