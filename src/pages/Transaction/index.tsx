import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import { dateFormatter, priceFormatter } from '../../utils/formatter'

import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td>Carro</td>
              <td>R$ 300.00</td>
              <td>Pneus</td>
              <td>22/12/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
      <Footer />
    </div>
  )
}
