import Input from '../../components/Input'
import * as S from './styles'

const Form = () => {
  return (
    <S.Form>
      <Input type="text" placeholder="Nome" />
      <Input type="tel" placeholder="Celular" />
      <Input type="email" placeholder="Email" />
      <S.Button type="submit">Adicionar</S.Button>
    </S.Form>
  )
}

export default Form
