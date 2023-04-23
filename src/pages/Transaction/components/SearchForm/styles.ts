import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: #121214;
    color: #c4c4cc;
    padding: 1rem;

    &::placeholder {
      color: #7c7c8a;
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid #00b37e;
    color: #00b37e;

    font-weight: bold;
    border-radius: 6px;

    &:hover {
      background: #00875f;
      border-color: #00875f;
      color: #fff;
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`
