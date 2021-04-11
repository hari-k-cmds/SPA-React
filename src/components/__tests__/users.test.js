import { render, screen, fireEvent } from '@testing-library/react';
import Users from '../users'

import store from './../../store/store'
import {Provider} from 'react-redux'

test('renders learn react link', () => {
    render(  <Provider store={store}><Users/></Provider>);
    const linkElement = screen.getByText(/Departments:/i);
    const linkElementGetDetails = screen.getByText(/GetDetails/i);
    fireEvent.click(linkElementGetDetails)
    const linkElementClear = screen.getByText(/Clear/i);
    fireEvent.click(linkElementClear)
    expect(linkElement).toBeInTheDocument();
});
;

