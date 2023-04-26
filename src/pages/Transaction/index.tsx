import { useState, useEffect, Key } from 'react'
import { Helmet } from 'react-helmet-async'

import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { firebase } from '../../services/firebase'

import { useAuth } from '../../hook/useAuth'

import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

interface TransactionProps {
  id: Key | null | undefined
  createdAt: string | number | Date
  key: string
  description: string
  price: number
  category: string
  date: string
  type: 'income' | 'outcome'
}

export function Transactions() {
  const { user } = useAuth()

  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  useEffect(() => {
    const user = firebase.auth().currentUser
    const transactionsRef = firebase
      .database()
      .ref(`users/${user?.uid}/transactions`)

    transactionsRef.on('value', (snapshot) => {
      const data = snapshot.val()
      const transacoesArray = []

      // Transforma as transações em um array de objetos
      for (const id in data) {
        transacoesArray.push({ id, ...data[id] })
      }

      // Atualiza o estado com o array de transações
      setTransactions(transacoesArray)
    })
  }, [])

  return (
    <div>
      <Helmet>
        <title>{`${user?.name} | DTmoney `}</title>
      </Helmet>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.description}</td>
                <td>
                  <PriceHighLight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighLight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
      <Footer />
    </div>
  )
}
