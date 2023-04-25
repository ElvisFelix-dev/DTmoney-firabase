import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(240px, 1fr));

  gap: 2rem;
  margin-top: -5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(240px, 1fr));
    gap: 1rem;
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);

    padding-top: 2rem;
  }
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: #323238;
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #c4c4cc;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      background: #015f43;
    `}

  @media (max-width: 768px) {
    padding: 1.5rem;
    strong {
      font-size: 1.5rem;
    }
  }
`
