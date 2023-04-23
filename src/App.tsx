import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from './pages/Home'
import { Transactions } from './pages/Transaction'
import { AuthContextProvider } from './contexts/AuthContext'

export function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/transactions" component={Transactions} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  )
}
