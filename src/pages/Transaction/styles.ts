import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;

  @media (max-width: 720px) {
    padding: 0 1rem;
  }
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  thead {
    display: none;
  }

  td {
    display: block;
    padding: 1.25rem 2rem;
    background: #29292e;

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }

    &:before {
      content: attr(data-label);
      display: block;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
  }

  @media (min-width: 720px) {
    td {
      display: table-cell;
      padding: 1.25rem 2rem;
      background: #29292e;
      &:before {
        display: none;
      }
    }
  }
`

interface PriceHighLightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${(props) => (props.variant === 'income' ? '#00B37E' : '#F75A68')};
`
