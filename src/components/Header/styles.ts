import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: #121214;
  padding: 2.5rem 0 7.5rem;

  @media (max-width: 768px) {
    padding: 1.5rem 5rem 5rem;
  }
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 1rem;
  }
`

export const InfoUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;

  span {
    font-size: 1rem;
    padding: 1rem;
    font-weight: bold;
    white-space: nowrap;
  }

  img {
    width: 80px;
    height: 80px;
    margin-left: 1rem;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-top: 1rem;
    margin-bottom: 1rem;
    white-space: nowrap;

    span {
      font-size: 0.875rem;
      padding: 0.75rem;
    }

    img {
      width: 40px;
      height: 40px;
    }
  }
`

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;

  background: #00875f;
  color: #fff;

  font-weight: bold;

  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 40px;
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
  }

  &:hover {
    background: #015f43;
    transition: background-color 0.2s;
  }
`
