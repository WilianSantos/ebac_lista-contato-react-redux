import { useSelector } from 'react-redux'
import ContactCard from '../../components/ContactCard'
import { MainContainer } from './styles'
import { RootReducer } from '../../store'

const ContactList = () => {
  const { itens } = useSelector((state: RootReducer) => state.contacts)

  return (
    <MainContainer>
      {itens.map((contact) => (
        <ContactCard key={contact.id} {...contact} />
      ))}
    </MainContainer>
  )
}

export default ContactList
