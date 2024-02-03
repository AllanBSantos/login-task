import styled from 'styled-components';
import { GB } from 'country-flag-icons/react/3x2'
import { BR } from 'country-flag-icons/react/3x2'
import { DE } from 'country-flag-icons/react/3x2'

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
`;
export const EnglishIcon = styled(GB)`
width: 35px;
height: 35px;
margin: 6px;
&:hover {
  cursor: pointer;
  width: 38px;
  height: 38px;
}
`;
export const GermanIcon = styled(DE)`
width: 35px;
height: 35px;
margin: 6px;
&:hover {
  cursor: pointer;
  width: 38px;
  height: 38px;
}
`;
export const PortugueseBRIcon = styled(BR)`
width: 35px;
height: 35px;
margin: 6px;
 &:hover {
  cursor: pointer;
  width: 38px;
  height: 38px;
  }
`;
