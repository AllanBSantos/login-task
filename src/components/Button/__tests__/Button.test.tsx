import { render, fireEvent, screen } from '@testing-library/react';
import Button from '../Button';

describe('Button', () => {
  it('should render children', () => {
    render(<Button>Test Button</Button>);
    const buttonElement = screen.getByText('Test Button');
    expect(buttonElement).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should show loading indicator when loading', () => {
    render(<Button loading={true}>Loading Button</Button>);
    const loadingElement = screen.getByTestId('loading-indicator');
    expect(loadingElement).toBeInTheDocument();
  });
});
