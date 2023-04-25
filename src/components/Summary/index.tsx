import { useEffect, useState } from 'react'
import { ArrowCircleUp, CurrencyDollar, ArrowCircleDown } from 'phosphor-react'
import { SummaryCard, SummaryContainer } from './styles'
import { priceFormatter } from '../../utils/formatter'

import { auth, firebase } from '../../services/firebase'

interface SummaryProps {
  income: number | string
  outcome: number | string
  total: number | string
}

export function Summary() {
  const [user, setUser] = useState<firebase.User | null>(null)
  const [summary, setSummary] = useState<SummaryProps>({
    income: 0,
    outcome: 0,
    total: 0,
  })

  useEffect(() => {
    const unlisten = auth.onAuthStateChanged((authUser) => {
      setUser(authUser)
    })

    return () => {
      unlisten()
    }
  }, [])

  useEffect(() => {
    async function fetchSummary() {
      const userId = user?.uid

      if (userId) {
        const userTransactions = await firebase
          .database()
          .ref(`users/${userId}/transactions`)
          .get()

        const { income, outcome } = Object.values(
          userTransactions.val(),
        ).reduce<{ income: number; outcome: number }>(
          (acc: any, transaction: any) => {
            if (transaction.type === 'income') {
              acc.income += Number(transaction.price)
            } else {
              acc.outcome += Number(transaction.price)
            }
            return acc
          },
          { income: 0, outcome: 0 },
        )
        setSummary({
          income: Number(income).toFixed(2),
          outcome: Number(outcome).toFixed(2),
          total: (Number(income) - Number(outcome)).toFixed(2),
        })
      }
    }

    fetchSummary()
  }, [user])

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong style={{ color: '#00b37e' }}>
          {priceFormatter.format(summary.income)}
        </strong>{' '}
        {/* {priceFormatter.format(summary.income)} */}
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong style={{ color: '#f75a68' }}>
          {priceFormatter.format(summary.outcome)}
        </strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Resumo</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
