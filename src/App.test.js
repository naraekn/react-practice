import React from 'react';

import { render } from '@testing-library/react';

import context from 'jest-plugin-context';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[ path ]}>
        <App />
      </MemoryRouter>
    ));
  }

  context('with path /', () => {
    it('renders Home page', () => {
      const { getByText } = renderApp({ path: '/' });

      expect(getByText(/Home/)).not.toBeNull();
    });
  });

  context('with path /posts', () => {
    it('renders Posts page', () => {
      const { getByText } = renderApp({ path: '/posts' });

      expect(getByText(/Posts/)).not.toBeNull();
    });
  });

  context('with path /movies', () => {
    it('renders Movies page', () => {
      const { getByText } = renderApp({ path: '/movies' });

      expect(getByText(/Movies/)).not.toBeNull();
    });
  });

  context('with path /restaurants', () => {
    it('renders Restaurants page', () => {
      const { getByText } = renderApp({ path: '/restaurants' });

      expect(getByText(/Restaurants/)).not.toBeNull();
    });
  });

  context('with path /login', () => {
    it('renders Login page', () => {
      const { getByText } = renderApp({ path: '/login' });

      expect(getByText(/Log/)).not.toBeNull();
    });
  });
});
