import { render, screen } from '@testing-library/react';
import { server, rest } from '../../../tests/testServer';
import Modal from './Modal';
import { vi } from 'vitest';

it('modal renders correctly', async () => {
  render(<Modal openModal={true} setOpenModal={vi.fn()} id={1} />);
  server.use(
    rest.get('https://rickandmortyapi.com/api/character/1', (_req, res, ctx) => {
      return res(
        ctx.json({
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
        })
      );
    })
  );

  expect(await screen.findByText(/rick/i)).toBeInTheDocument();
});
