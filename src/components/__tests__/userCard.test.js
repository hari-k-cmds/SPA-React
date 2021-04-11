import { render, screen, fireEvent } from '@testing-library/react';
import UserCard from '../userCard'

import store from './../../store/store'
import {Provider} from 'react-redux'

test('renders learn react link', () => {
    render(  <Provider store={store}><UserCard/></Provider>);
    const linkElement = screen.getByText(/Name:/i);
    expect(linkElement).toBeInTheDocument();
});
;

