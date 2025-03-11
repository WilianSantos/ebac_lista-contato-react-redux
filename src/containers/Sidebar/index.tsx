import Input from '../../components/Input'
import Form from '../Form'
import * as S from './styles'

const Sidebar = () => {
  return (
    <S.Sidebar>
      <S.SidebarMain>
        <S.SidebarHeader>
          <S.SidebarTitle as="h2">Adicionar Contato</S.SidebarTitle>
          <Input type="text" placeholder="Buscar" />
        </S.SidebarHeader>
        <Form />
      </S.SidebarMain>
    </S.Sidebar>
  )
}

export default Sidebar
