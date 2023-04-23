import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

import { firebase } from '../../services/firebase'
import { useAuth } from '../../hook/useAuth'

export function NewTransactionModal() {
  const [transactionType, setTransactionType] = useState('income')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const { user } = useAuth()

  useEffect(() => {
    const usersRef = firebase.database().ref('users')
    usersRef.on('value', (snapshot) => {
      const transactions = snapshot.val()
      console.log(transactions)
    })
  }, [])

  async function handleTransactions() {
    if (description !== '' && price !== '' && category !== '') {
      const id = user?.id
      const usersRef = firebase.database().ref('users')
      const userRef = usersRef.child(id!)
      const transactionsRef = userRef.child('transactions')
      const newTransactionRef = transactionsRef.push()

      newTransactionRef.set({
        description,
        price,
        category,
        type: transactionType,
      })

      alert('Cadastrado com sucesso')
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title title="Informe descrição, preço e a categoria da transação ">
          Nova Transação
        </Dialog.Title>
        <CloseButton title="Fechar o modal">
          <X size={24} />
        </CloseButton>

        <form action="">
          <input
            type="text"
            placeholder="Descrição"
            title="Digite a descrição da transação"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            placeholder="Preço"
            title="Digite o preço da transação"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="text"
            placeholder="Categoria"
            title="Digite a categoria da transação"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <TransactionType>
            <TransactionTypeButton
              variant="income"
              value="income"
              onClick={() => setTransactionType('income')}
              active={Boolean(transactionType === 'income')}
            >
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>

            <TransactionTypeButton
              variant="outcome"
              value="outcome"
              onClick={() => setTransactionType('outcome')}
              active={Boolean(transactionType === 'outcome')}
            >
              <ArrowCircleDown size={24} />
              Saída
            </TransactionTypeButton>
          </TransactionType>

          <button
            type="submit"
            title="Cadastrar uma transação"
            onClick={handleTransactions}
          >
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
