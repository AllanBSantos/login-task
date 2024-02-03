import styled from 'styled-components';
import ReactLoading from 'react-loading';
export const GradientButton = styled.button`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding 10px 20px;
  color: white;
  border: none;
  border-radius: 5px;
  background: linear-gradient(to right, #1e16b8, #2d21de);
  text-align: center;
  transition: all 0.3s ease-out;
  cursor: pointer;
  margin-top: 3rem;

  &:hover {
    background: linear-gradient(to right, #2d21de, #1e16b8);
  }
`;

export const LoadingIcon = styled(ReactLoading)``;
