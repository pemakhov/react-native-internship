import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from './store';
import App from './App';

test('renders logo', () => {
  render(<Provider store={store}><App /></Provider>);
  const logoText = screen.getByText(/jokes/i);
  expect(logoText).toBeInTheDocument();
});
