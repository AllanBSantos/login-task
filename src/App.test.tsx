/* eslint-disable testing-library/prefer-screen-queries */
import { render, act } from '@testing-library/react';
import App from './App';
import i18next from 'i18next';

jest.mock('i18next', () => ({
  changeLanguage: jest.fn(),
}));

jest.mock('./routes', () => () => <div>Mocked Router</div>);
jest.mock('./components/LanguageConfig', () => () => <div>Mocked LanguageConfig</div>);

describe('App', () => {
  it('should render Router and LanguageConfig components', () => {
    const { getByText } = render(<App />);
    expect(getByText('Mocked Router')).toBeInTheDocument();
    expect(getByText('Mocked LanguageConfig')).toBeInTheDocument();
  });

  it('should call changeLanguage with the language from localStorage', () => {
    const language = 'en';
    localStorage.setItem('language', language);
      render(<App />);
    expect(i18next.changeLanguage).toHaveBeenCalledWith(language);
  });
});
