import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

describe('HomePage', () => {
  const renderHomePage = () => render((
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  ));

  const links = [
    'Posts',
    'Search',
    'Movies',
    'Restaurants',
    'Login',
  ];

  it('renders page links', () => {
    const { getByText } = renderHomePage();

    links.forEach((link) => {
      expect(getByText(link)).not.toBeNull();
    });
  });
});