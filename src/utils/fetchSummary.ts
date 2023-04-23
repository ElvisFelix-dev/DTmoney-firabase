import firebase from 'firebase/app'
import 'firebase/database'

type Transaction = {
  type: string
  price: number
}

export async function fetchSummary() {
  const ref = firebase.database().ref('/transactions')
  const snapshot = await ref.once('value')
  const transactions: Transaction[] = snapshot.val()

  return transactions.reduce(
    (
      acc: { income: any; total: number; outcome: any },
      transaction: Transaction,
    ) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
        acc.total += transaction.price
      } else {
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }
      return acc
    },
    { income: 0, outcome: 0, total: 0 },
  )
}
