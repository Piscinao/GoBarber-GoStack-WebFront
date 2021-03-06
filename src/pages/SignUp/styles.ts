import styled, { keyframes } from 'styled-components';

import { shade } from 'polished';

import signUpBackgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
  // Assume toda a tela que o usuário tem da altura
  height: 100vh;

  display: flex;

  // Itens que tem dentro do container estica o máximo o que estiver dentro
  align-items: stretch;
`;

export const Content = styled.div`
  // Todo o conteúdo do content vai ficar no centro
  /* place-content: center; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  // Ocupa o máximo da tela possível mas que tenha o máximo de 700px
  max-width: 700px;
`;

// animação quando entrar na pagina
const appearFromRight = keyframes`
  from{
    opacity: 0;
    transform: translateX(50px);
  }
  to{
    opacity: 1;
    transform: translateX(0px);

  }
`;
export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromRight} 1s;

  form {
    margin: 60px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    /* input {
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }

    & + input {
      margin-top: 8px;
    }
  } */
    /*
  button {
    background: #ff9000;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #312e38;
    width: 100%;
    font-weight: 500;
    margin-top: 16px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  } */

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  // somente ancora dentro do content
  > a {
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;
`;
