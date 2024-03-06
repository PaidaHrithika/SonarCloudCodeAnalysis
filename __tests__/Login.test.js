import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from '../Login';
 
test('renders login form', () => {
  const { getByPlaceholderText } = render(<Login />);
  const usernameInput = getByPlaceholderText('Username');
  const passwordInput = getByPlaceholderText('Password');
  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();

});
 
test('calls onLogin prop with username when login button is clicked', () => {
  const onLogin = jest.fn();
  const { getByPlaceholderText } = render(<Login onLogin={onLogin} />);
  const usernameInput = getByPlaceholderText('Username');
  const passwordInput = getByPlaceholderText('Password');
  fireEvent.change(usernameInput, { target: { value: 'testUser' } });
  fireEvent.change(passwordInput, { target: { value: 'testPassword' } });
});