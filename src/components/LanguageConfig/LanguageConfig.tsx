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
        <EnglishIcon data-testid="english-icon" />
      </FlagContainer>
      <FlagContainer onClick={() => handleChangeLanguage('de')}>
        <GermanIcon data-testid="german-icon" />
      </FlagContainer>
      <FlagContainer onClick={() => handleChangeLanguage('pt')}>
        <PortugueseBRIcon data-testid="portuguese-icon"/>
      </FlagContainer>
    </Container>
  );
};

export default LanguageConfig;
