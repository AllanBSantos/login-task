/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from '@testing-library/react';
import AuthContext from '../../../context/AuthContext';
import Login from '../Login';
import * as utils from '../../../utils/validateEmail';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe('Login', () => {
  it('should render login form', () => {
    const mockLogin = jest.fn();
    const mockLogout = jest.fn();
    const authContextValue = { user:null, login: mockLogin, logout: mockLogout };
    const { getByText } = render(
      <AuthContext.Provider value={authContextValue}>
        <Login />
      </AuthContext.Provider>
    );

    expect(getByText('USER LOGIN')).toBeInTheDocument();
    expect(getByText('Your Email')).toBeInTheDocument();
    expect(getByText('Your Password')).toBeInTheDocument();
    expect(getByText('Login')).toBeInTheDocument();
  });

  it('should call login function when form is submitted and fields are right', () => {
    const mockLogin = jest.fn();
    const mockLogout = jest.fn();
    const authContextValue = { user:null, login: mockLogin, logout: mockLogout };
    const { getByText, getByTestId } = render(
      <AuthContext.Provider value={authContextValue}>
        <Login />
      </AuthContext.Provider>
    );
    const validateEmailMock = jest.spyOn(utils, 'validateEmail').mockReturnValue(true);
    const loginButton = getByText('Login');
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    fireEvent.change(emailInput, { target: { value: 'john@doe.co' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(loginButton);
    expect(validateEmailMock).toHaveBeenCalled();
    expect(mockLogin).toHaveBeenCalled();
  });

  it ('should show error message when email is not valid', () => {
    const mockLogin = jest.fn();
    const mockLogout = jest.fn();
    const authContextValue = { user:null, login: mockLogin, logout: mockLogout };
    const { getByText, getByTestId } = render(
      <AuthContext.Provider value={authContextValue}>
        <Login />
      </AuthContext.Provider>
    );
    const validateEmailMock = jest.spyOn(utils, 'validateEmail').mockReturnValue(false);
    const loginButton = getByText('Login');
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    fireEvent.change(emailInput, { target: { value: 'xxxx@xxx' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(loginButton);
    expect(validateEmailMock).toHaveBeenCalled();
    expect(getByText('Email is not valid')).toBeInTheDocument();
  });

  it ('should show error message when email or password are empty', () => {
    const mockLogin = jest.fn();
    const mockLogout = jest.fn();
    const authContextValue = { user:null, login: mockLogin, logout: mockLogout };
    const { getByText } = render(
      <AuthContext.Provider value={authContextValue}>
        <Login />
      </AuthContext.Provider>
    );
    const loginButton = getByText('Login');
    fireEvent.click(loginButton);
    expect(getByText('Please fill your email and password')).toBeInTheDocument();
  });
});
