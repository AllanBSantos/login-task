import styled from "styled-components";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  &[type='password'] {
    font-size: 1rem;
  }
  &.error {
    border-color: red;
    color: red; 
  }
`;


export const OpenedEyeIcon = styled(FaEye)`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  font-size: 1rem;
`;
export const ClosedEyeIcon = styled(FaEyeSlash)`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  font-size: 1rem;
`;
