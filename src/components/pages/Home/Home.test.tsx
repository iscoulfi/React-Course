import { render, screen } from '@testing-library/react';
import { server, rest } from '../../../tests/testServer';
import Home from './Home';

describe('Home', () => {
  it('shows Home mounts properly', () => {
    const wrapper = render(<Home />);
    expect(wrapper).toBeTruthy();
  });

  it('modal renders correctly', async () => {
    render(<Home />);
    server.use(
      rest.get('https://rickandmortyapi.com/api/character/?name=jar', (_req, res, ctx) => {
        return res(
          ctx.json({
            info: {
              count: 1,
              pages: 1,
              next: null,
              prev: null,
            },
            results: [
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
            ],
          })
        );
      })
    );
    expect(await screen.findByText(/jar/i)).toBeInTheDocument();
    expect(screen.getAllByTestId('card').length).toBe(1);
  });
});
