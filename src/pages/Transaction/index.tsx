import { useState, useEffect } from 'react'
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
    const fetchTransactions = async () => {
      const snapshot = await firebase
        .database()
        .ref('transactions')
        .once('value')
      const transactionsData = snapshot.val()
      const transactionsArray = Object.entries<TransactionProps>(
        transactionsData || {},
      ).map(([key, value]) => ({ ...value, key }))

      setTransactions(transactionsArray)
    }

    fetchTransactions()
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
              <tr key={transaction.key}>
                <td>{transaction.description}</td>
                <td>
                  <PriceHighLight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighLight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.date))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
      <Footer />
    </div>
  )
}
