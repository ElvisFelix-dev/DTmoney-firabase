import { ArrowCircleUp, CurrencyDollar, ArrowCircleDown } from 'phosphor-react'
import { SummaryCard, SummaryContainer } from './styles'
import { useEffect, useState } from 'react'

import { firebase } from '../../services/firebase'

interface SummaryProps {
  income: number
  outcome: number
  total: number | string
}

export function Summary() {
  const [summary, setSummary] = useState<SummaryProps>({
    income: 0,
    outcome: 0,
    total: 0,
  })

  useEffect(() => {
    async function fetchSummary() {
      const userId = firebase.auth().currentUser?.uid

      if (userId) {
        const userTransactions = await firebase
          .database()
          .ref(`users/${userId}/transactions`)
          .get()

        console.log(userTransactions.val())

        const { income, outcome } = userTransactions.val().reduce(
          (
            acc: { income: any; outcome: any },
            transaction: { type: string; price: any },
          ) => {
            if (transaction.type === 'income') {
              acc.income += transaction.price
            } else {
              acc.outcome += transaction.price
            }
            return acc
          },
          { income: 0, outcome: 0 },
        )

        console.log(income, outcome)

        setSummary({
          income: income.toFixed(2),
          outcome: outcome.toFixed(2),
          total: (income - outcome).toFixed(2),
        })
      }
    }

    fetchSummary()
  }, [])

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>R${summary.income}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>R$ {summary.outcome}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Resumo</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>R$ {summary.total}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
