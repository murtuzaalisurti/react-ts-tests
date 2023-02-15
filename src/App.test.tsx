// import React from 'react';
import { screen, render } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe("user navigation", () => {
  /**
   * TODO :- console.log(window.location.pathname) value is same for every test because I guess the actual browser URL isn't updated, MemoryRouter only mocks the behaviour 
   * */

  it('should render the API component on route /api', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    userEvent.click(screen.getByText(/API/))
    console.log(window.location.pathname)
    expect(screen.getByText(/StarShips/)).toBeInTheDocument()
  });

  it('should render the Greet component on route /greet', () => {
    render(
      <MemoryRouter initialEntries={["/"]} initialIndex={0}> 
      {
      /** 
       * ? OR <MemoryRouter>
       * 
       */
      }
        <App />
      </MemoryRouter>
    );
    userEvent.click(screen.getByText(/Greet/))
    console.log(window.location.pathname)
    expect(screen.getByText(/Greet/)).toBeInTheDocument()
  });

  it('should render the Greet component on route /count', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    userEvent.click(screen.getByText(/Counter/))
    console.log(window.location.pathname)
    expect(screen.getByText(/Counter/)).toBeInTheDocument()
  });

})
