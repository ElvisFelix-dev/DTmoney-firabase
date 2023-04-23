import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: #121214;
  padding: 2.5rem 0 7.5rem;

  @media (max-width: 768px) {
    padding: 1.5rem 0 5rem;
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
    padding: 0 1rem;
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
    padding: 0 1rem;
    font-size: 0.875rem;
  }

  &:hover {
    background: #015f43;
    transition: background-color 0.2s;
  }
`
