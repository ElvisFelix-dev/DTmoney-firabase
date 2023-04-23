import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input
        type="text"
        placeholder="Busque por transações"
        title="Digite uma transação para busca"
        required
      />

      <button type="submit" title="Aperte para iniciar buscas">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
