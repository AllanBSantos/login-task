import React from 'react';
import { EnglishIcon, PortugueseBRIcon, GermanIcon, Container } from './LanguageConfig.style'; 


const LanguageConfig:React.FC = () => {
  return (
    <Container>
        <EnglishIcon/>
        <GermanIcon/>
        <PortugueseBRIcon/>
    </Container>
  );
};

export default LanguageConfig;
