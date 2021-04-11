import { render, screen, fireEvent } from '@testing-library/react';
import Loading from '../loading'

test('renders learn react link', () => {
    render(<Loading/>);
    const linkElement = screen.getByText(/loading.../i);
    expect(linkElement).toBeInTheDocument();
});
;

