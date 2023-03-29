import React from 'react';
import { screen, act } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App, { About } from './App';

describe('teste da aplicação toda', () => {
  test('deve renderizar o componente App', () => {
    renderWithRouter(<App />);

    const homeTitle = screen.getByRole('heading', {
      name: 'Você está na página Início',
    });
    expect(homeTitle).toBeInTheDocument();
  });

  test('deve renderizar o componente Sobre', async () => {
    const { history } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'Sobre' });
    expect(aboutLink).toBeInTheDocument();
    // userEvent.click(aboutLink);
    act(() => {
      history.push('/about');
    })

    const { pathname } = history.location;
    expect(pathname).toBe('/about');

    const aboutTitle = await screen.findByRole('heading',
      { name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument();
  });

  test('deve testar um caminho não existente e a renderização do Not Found', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/pagina/que-nao-existe/');
    })

    const notFoundTitle = screen.getByRole('heading',
      { name: 'Página não encontrada' });
    expect(notFoundTitle).toBeInTheDocument();
  });

  test('deve renderizar o componente About (apenas componente)', () => {
    renderWithRouter(<About />);
  
    const aboutTitle = screen.getByRole('heading',
      { name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument();
  });
});
