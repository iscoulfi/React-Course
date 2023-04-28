import { render } from '@testing-library/react';
import Home from './Home';
import { vi } from 'vitest';
import { getCharactersByQuery } from '../../../redux/slices/search/asyncActions';
import { setupStore } from '../../../redux/store';
import { Provider } from 'react-redux';

const store = setupStore();

const mockCards = [
  {
    id: 141,
    name: 'Ghost in a Jar',
    status: 'Dead',
    species: 'Alien',
    type: 'Parasite',
    gender: 'Genderless',
    origin: {
      name: 'unknown',
      url: '',
    },
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/141.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/15'],
    url: 'https://rickandmortyapi.com/api/character/141',
    created: '2017-12-27T19:14:14.545Z',
  },
];

const fn = () => ({});

describe('Home', () => {
  it('shows Home mounts properly', async () => {
    const wrapper = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(wrapper).toBeTruthy();
  });

  it('show api call is correc', async () => {
    const dispatch = vi.fn();
    const thunk = getCharactersByQuery('jar');
    await thunk(dispatch, fn, fn);

    expect(dispatch.mock.calls[1][0].payload).toEqual(mockCards);
  });
});
