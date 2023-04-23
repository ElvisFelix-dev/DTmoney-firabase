import styled from 'styled-components'

import imgBg from '../../assets/imgBg.jpg'
import { shade } from 'polished'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 700px;
  padding: 35px;

  img {
    padding: 20px;
  }

  p {
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    padding-bottom: 15px;

    line-height: 30px;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }

  button {
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    background-color: transparent;
    border: none;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }

    button:focus {
      outline: none;
    }
  }

  > button {
    color: #00b37e;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    transition: background-color 0.2s;
    transition: 5s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#00B37E')};
      transform: translate(-50%, -50%) scale(2, 2);
      transition: transform 2s ease-in-out;
    }
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${imgBg}) no-repeat center;
  background-size: cover;
`
