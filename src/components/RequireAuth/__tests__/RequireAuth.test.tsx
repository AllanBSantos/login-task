/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import AuthContext from '../../../context/AuthContext';
import RequireAuth from '../RequireAuth';

jest.mock('../../../pages/Login', () => () => <div>Login</div>);

describe('RequireAuth', () => {
  it('should render Login component when not authenticated', () => {
    const mockLogin = jest.fn();
    const mockLogout = jest.fn();
    const authContextValue = { user:null, login: mockLogin, logout: mockLogout };
    const { getByText } = render(
      <AuthContext.Provider value={authContextValue}>
        <RequireAuth>
          <div>Protected Content</div>
        </RequireAuth>
      </AuthContext.Provider>
    );

    expect(getByText('Login')).toBeInTheDocument();
  });

  it('should render children when authenticated', () => {
    const mockLogin = jest.fn();
    const mockLogout = jest.fn();
    const authContextValue = { user:{ id: 1, token: 'token' }, login: mockLogin, logout: mockLogout }
    const { getByText } = render(
      <AuthContext.Provider value={authContextValue}>
        <RequireAuth>
          <div>Protected Content</div>
        </RequireAuth>
      </AuthContext.Provider>
    );

    expect(getByText('Protected Content')).toBeInTheDocument();
  });
});
