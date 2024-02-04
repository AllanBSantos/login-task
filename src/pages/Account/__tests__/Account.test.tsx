/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthContext from '../../../context/AuthContext/AuthContext';
import Account from '../Account';
import getUserQuery from '../../../graphql/queries/getUserQuery';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

const mocks = [
  {
    request: {
      query: getUserQuery,
      variables: { id: 1 },
    },
    result: {
      data: {
        user: {
          firstName: 'John',
          lastName: 'Doe',
        },
      },
    },
  },
];

describe('Account', () => {
  it('should render user information when user is authenticated', async () => {
    const mockLogin = jest.fn();
    const mockLogout = jest.fn();
    const authContextValue = { user: { id: 1, token: 'token' }, login: mockLogin, logout: mockLogout };

     const { getByText, queryByTestId } = render(
          <Router>
            <AuthContext.Provider value={authContextValue}>
              <MockedProvider mocks={mocks} addTypename={false}>
                <Account />
              </MockedProvider>
            </AuthContext.Provider>
          </Router>
      );

    await waitFor(() => expect(queryByTestId('account-loading')).not.toBeInTheDocument());

    expect(getByText('First name:')).toBeInTheDocument();
    expect(getByText('John')).toBeInTheDocument();
    expect(getByText('Last name:')).toBeInTheDocument();
    expect(getByText('Doe')).toBeInTheDocument();
  });

  it('should call logout function when Logout button is clicked', async() => {
    const mockLogin = jest.fn();
    const mockLogout = jest.fn();
    const authContextValue = { user: { id: 1, token: 'token' }, login: mockLogin, logout: mockLogout };

   const { getByText, queryByTestId } = render(
      <Router>
        <AuthContext.Provider value={authContextValue}>
          <MockedProvider mocks={mocks} addTypename={false}>
            <Account />
          </MockedProvider>
        </AuthContext.Provider>
      </Router>
    );


    await waitFor(() => expect(queryByTestId('account-loading')).not.toBeInTheDocument());

    fireEvent.click(getByText('Logout'));
    expect(mockLogout).toHaveBeenCalled()
  });
});
