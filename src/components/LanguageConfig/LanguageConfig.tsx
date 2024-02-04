import React from 'react';
import { EnglishIcon, PortugueseBRIcon, GermanIcon, Container, FlagContainer } from './LanguageConfig.style'; 
import { changeLanguage } from 'i18next';

const LanguageConfig:React.FC = () => {

  const handleChangeLanguage = (language: string) => {
    changeLanguage(language);
    localStorage.setItem('language', language);
  }

  return (
    <Container>
      <FlagContainer onClick={() => handleChangeLanguage('en')} >
        <EnglishIcon/>
      </FlagContainer>
      <FlagContainer onClick={() => handleChangeLanguage('de')}>
        <GermanIcon/>
      </FlagContainer>
      <FlagContainer onClick={() => handleChangeLanguage('pt')}>
        <PortugueseBRIcon/>
      </FlagContainer>
    </Container>
  );
};

export default LanguageConfig;
