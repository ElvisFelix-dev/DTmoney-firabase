import * as Dialog from '@radix-ui/react-dialog'

import { useAuth } from '../../hook/useAuth'
import { NewTransactionModal } from '../NewTransactionModal'
import {
  HeaderContainer,
  HeaderContent,
  NewTransactionButton,
  InfoUser,
} from './styles'

import imgLogo from '../../assets/imgLogo.svg'

export function Header() {
  const { user } = useAuth()

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={imgLogo} alt="Logo DTmoney" />
        <InfoUser>
          <p>
            Olá<span>{user?.name}</span>
          </p>
          <img src={user?.avatar} alt="Avatar do Google" />
        </InfoUser>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton title="Aperte para adicionar uma nova transação">
              Nova transação
            </NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
