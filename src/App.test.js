import { render, screen } from '@testing-library/react';
import App from './App';
import store from './store/store'
import {Provider} from 'react-redux'

test('App shpuld render', () => {
  render(
    <Provider store={store}>
  <App />
  </Provider>
  );
  const linkElement = screen.getByText(/Departments:/i);
  expect(linkElement).toBeInTheDocument();
});
