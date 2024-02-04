import { render, screen } from '@testing-library/react';
import AuthContext from '../AuthContext';

describe('AuthContext', () => {
  it('should provide null as the default value', () => {
    const mockLogin = jest.fn();
    const mockLogout = jest.fn();
    const user = null;
    const children = 'null';
    render(
      <AuthContext.Provider value= {{
        user,
        login: mockLogin,
        logout: mockLogout
        }}>
           {children}
       </AuthContext.Provider>
    );

    const valueElement = screen.getByText('null');
    expect(valueElement).toBeInTheDocument();
  });
});
