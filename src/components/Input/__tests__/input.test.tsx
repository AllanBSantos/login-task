import { render, fireEvent, screen } from '@testing-library/react';
import Input from '../Input';

describe('Input', () => {
  it('should render input element', () => {
    render(<Input onChange={() => {}} />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  it('should call onChange when input value changes', () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should validate input when it loses focus', () => {
    const validateCallback = jest.fn().mockReturnValue(true);
    render(<Input onChange={() => {}} validateCallback={validateCallback} />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.blur(inputElement);
    expect(validateCallback).toHaveBeenCalledTimes(1);
  });

  it('should toggle password visibility when eye icon is clicked', () => {
    render(<Input isPassword={true} onChange={() => {}} />);
    const closedEyeIcon = screen.getByRole('button');
    fireEvent.click(closedEyeIcon);
    const openedEyeIcon = screen.getByRole('button');
    expect(openedEyeIcon).toBeInTheDocument();
  });
});
