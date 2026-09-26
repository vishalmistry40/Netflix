// @vitest-environment jsdom
import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import reducer from './reducer';

vi.mock('./actions', async importOriginal => {
  const actions = await importOriginal();
  return { ...actions, fetchData: () => ({ type: 'TEST_NO_FETCH' }) };
});

describe('movie list', () => {
  it('renders both lists and can move a recommendation into My List', () => {
    const store = createStore(reducer, {
      mylist: [], recommendations: [{ id: 'one', title: 'Sample movie', img: '/sample.png' }]
    });
    render(<Provider store={store}><App /></Provider>);
    expect(screen.getByText('Recommendations')).toBeTruthy();
    expect(screen.getByText('Sample movie')).toBeTruthy();
    screen.getByRole('button', { name: 'Add' }).click();
    expect(store.getState().mylist).toHaveLength(1);
    expect(store.getState().recommendations).toHaveLength(0);
    expect(screen.getByText('My List Titles')).toBeTruthy();
  });
});
