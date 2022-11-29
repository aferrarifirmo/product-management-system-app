import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import NewProduct from '../pages/NewProduct';

describe('New product page', () => {
  test('should render ProductForm component', () => {
    render(
      <BrowserRouter>
        <NewProduct />
      </BrowserRouter>
    );
    const formElem = screen.getByTestId('form');
    expect(formElem).toBeInTheDocument();
  });
   test('should render the submit and cancel buttons', () => {
    render(<BrowserRouter><NewProduct /></BrowserRouter>);
    const cancelBtn = screen.getByTestId('cancel-btn');
    const submitBtn = screen.getByTestId('submit-btn');
    expect(cancelBtn).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
   });
   test('should not redirect on submit if required fields are not filled', () => {
    render(<MemoryRouter initialEntries={['/new']}><NewProduct/></MemoryRouter>);
    fireEvent.click(screen.getByTestId('submit-btn'));
    expect(screen.getByText(/Add a new farm/i)).toBeInTheDocument()
  });
});