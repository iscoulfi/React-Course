import { vi } from 'vitest';
import * as hooks from '../../../redux/store';
import { getCharacter } from '../../../redux/slices/search/asyncActions';

const mockCard = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Earth (C-137)',
    url: 'https://rickandmortyapi.com/api/location/1',
  },
  location: {
    name: 'Citadel of Ricks',
    url: 'https://rickandmortyapi.com/api/location/3',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: [],
  url: 'https://rickandmortyapi.com/api/character/1',
  created: '2017-11-04T18:48:46.250Z',
};

const fn = () => ({});

const mockedDispatch = vi.spyOn(hooks, 'useAppDispatch');

it('api call in modal window is correct', async () => {
  const dispatch = vi.fn();
  const thunk = getCharacter(1);
  await thunk(dispatch, fn, fn);
  mockedDispatch.mockResolvedValue(dispatch);
  vi.spyOn(hooks, 'useAppSelector').mockReturnValue('');

  expect(dispatch.mock.calls[1][0].payload.name).toBe(mockCard.name);
});
