import React from 'react';
import { EnglishIcon, PortugueseBRIcon, GermanIcon, Container, FlagContainer } from './LanguageConfig.style'; 


const LanguageConfig:React.FC = () => {
  return (
    <Container>
      <FlagContainer>
        <EnglishIcon/>
      </FlagContainer>
      <FlagContainer>
        <GermanIcon/>
      </FlagContainer>
      <FlagContainer>
        <PortugueseBRIcon/>
      </FlagContainer>
    </Container>
  );
};

export default LanguageConfig;
