import { rest } from 'msw';
import { moviesList } from '../mockData/MoviesList';
const backendUrl = 'http://localhost:4000';

export const handlers = [
  rest.get(`${backendUrl}/movies`, (req, res, ctx) => {
    console.log('mock get movies');
    const data = moviesList;
    return res(ctx.json({ data }));
  }),
  rest.get('https://jsonplaceholder.typicode.com/todos', (req, res, ctx) => {
    return res(ctx.json(moviesList));
  }),
];
