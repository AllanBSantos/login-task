/* eslint-disable testing-library/prefer-screen-queries */
import { render, act, renderHook } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from '../AuthProvider';
import LoginMutation from '../../../graphql/mutations/LoginMutation';
import { useContext } from 'react';
import AuthContext from '../../../context/AuthContext';

jest.mock('react-cookie', () => ({
  useCookies: () => [{}, jest.fn(), jest.fn()],
}));

const mocks = [
  {
    request: {
      query: LoginMutation,
      variables: { identifier: 'test@test.com', password: 'password' },
    },
    result: {
      data: {
        login: {
          user: { id: '1' },
          jwt: 'token',
        },
      },
    },
  },
];

describe('AuthProvider', () => {
  it('should render children when user is authenticated', async () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Router>
          <AuthProvider>
            <div>Protected Content</div>
          </AuthProvider>
        </Router>
      </MockedProvider>
    );

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0)); 
    });

    expect(getByText('Protected Content')).toBeInTheDocument();
  });

  it('should call login when login function is called', async () => {
    const { result } = renderHook(() => useContext(AuthContext), {
      wrapper: ({ children }) => (
        <MockedProvider mocks={mocks} addTypename={false}>
          <Router>
            <AuthProvider>{children}</AuthProvider>
          </Router>
        </MockedProvider>
      ),
    });

    await act(async () => {
      await result.current.login({ email: 'test@test.com', password: 'password' });
    });

    expect(result.current.user).toEqual({ id: '1', token: 'token' });
  });
});
