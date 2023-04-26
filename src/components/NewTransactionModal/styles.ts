import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;

  background: #202024;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  text-align: center;

  @media (max-width: 720px) {
    min-width: unset;
    padding: 2rem 1.8rem;

    width: 365px;
  }

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background: #121214;
      color: #c4c4cc;
      padding: 1rem;

      &::placeholder {
        color: #7c7c8a;
      }
    }
  }

  button[type='submit'] {
    height: 58px;
    border: 0;

    background: #00875f;
    color: #fff;

    font-weight: bold;

    padding: 0 1.25rem;
    margin-top: 1.5rem;

    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: #015f43;
      transition: background-color 0.2s;
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;

  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;

  cursor: pointer;

  color: #7c7c8a;

  &:hover {
    color: #8d8d99;
  }
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, minmax(240px, 1fr));
  gap: 1rem;
  margin-top: 0.5rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
  $active: boolean
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  background: #29292e;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border-radius: 6px;

  cursor: pointer;

  border: 0;

  color: #8d8d99;

  svg {
    color: ${(props) => (props.variant === 'income' ? '#00B37E' : '#F75A68')};
  }

  &[data-state='unchecked']:hover {
    background: #323238;
    transition: background-color 0.2s;
  }

  &[data-state='checked'] {
    color: #fff;
    background: ${(props) =>
      props.variant === 'income' ? '#00B37E' : '#F75A68'};
  }

  svg {
    color: #fff;
  }

  @media (max-width: 720px) {
    width: 100%;
    flex-direction: column;
  }
`
