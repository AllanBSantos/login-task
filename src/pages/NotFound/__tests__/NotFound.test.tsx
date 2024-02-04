/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import NotFound from '../NotFound';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe('NotFound', () => {
  it('should render "Page not found" text', () => {
    const { getByText } = render(<NotFound />);
    const notFoundElement = getByText('Page not found');
    expect(notFoundElement).toBeInTheDocument();
  });
});
