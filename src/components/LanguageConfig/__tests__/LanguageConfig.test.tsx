/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from '@testing-library/react';
import LanguageConfig from '../LanguageConfig';
import i18next from 'i18next';

jest.mock('i18next', () => ({
  changeLanguage: jest.fn(),
}));

describe('LanguageConfig', () => {
  it('should call changeLanguage with "en" when EnglishIcon is clicked', () => {
    const { getByTestId } = render(<LanguageConfig />);
    fireEvent.click(getByTestId('english-icon'));
    expect(i18next.changeLanguage).toHaveBeenCalledWith('en');
  });

  it('should call changeLanguage with "de" when GermanIcon is clicked', () => {
    const { getByTestId } = render(<LanguageConfig />);
    fireEvent.click(getByTestId('german-icon'));
    expect(i18next.changeLanguage).toHaveBeenCalledWith('de');
  });

  it('should call changeLanguage with "pt" when PortugueseBRIcon is clicked', () => {
    const { getByTestId } = render(<LanguageConfig />);
    fireEvent.click(getByTestId('portuguese-icon'));
    expect(i18next.changeLanguage).toHaveBeenCalledWith('pt');
  });
});
