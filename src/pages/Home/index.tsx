import { useHistory } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { useAuth } from '../../hook/useAuth'

import { Container, Content, Background } from './styles'
import imgLogo from '../../assets/imgLogo.svg'

export function Home() {
  const history = useHistory()
  const { user, signInWithGoogle } = useAuth()

  async function handleJoin() {
    if (!user) {
      await signInWithGoogle()
    }
    history.push('/transactions')
  }

  return (
    <Container>
      <Content>
        <img src={imgLogo} alt="logo da DTmoney" />
        <p>
          DTmoney é uma plataforma extremamente útil e eficaz para gerenciar
          finanças pessoais. Ele fornece uma interface amigável e intuitiva para
          acompanhar suas receitas e despesas, ajudando você a entender melhor
          como está gastando seu dinheiro e a tomar decisões mais informadas
          sobre suas finanças.
        </p>

        <button onClick={handleJoin}>
          <FcGoogle />
          Fazer Login
        </button>
      </Content>
      <Background />
    </Container>
  )
}
