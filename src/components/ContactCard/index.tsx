import iconContact from 'bootstrap-icons/icons/person-circle.svg'
import * as S from './styles'

const contacts = [
  {
    name: 'Bruno Costa',
    cellPhone: '11987654322',
    email: 'bruno.costa@example.com'
  },
  {
    name: 'Carla Souza',
    cellPhone: '11987654323',
    email: 'carla.souza@example.com'
  },
  {
    name: 'Alice Silva',
    cellPhone: '11987654321',
    email: 'alice.silva@example.com'
  },
  {
    name: 'Bruno Costa',
    cellPhone: '11987654322',
    email: 'bruno.costa@example.com'
  },
  {
    name: 'Carla Souza',
    cellPhone: '11987654323',
    email: 'carla.souza@example.com'
  },
  {
    name: 'Daniel Oliveira',
    cellPhone: '11987654324',
    email: 'daniel.oliveira@example.com'
  },
  {
    name: 'Bruno Costa',
    cellPhone: '11987654322',
    email: 'bruno.costa@example.com'
  },
  {
    name: 'Carla Souza',
    cellPhone: '11987654323',
    email: 'carla.souza@example.com'
  },
  {
    name: 'Alice Silva',
    cellPhone: '11987654321',
    email: 'alice.silva@example.com'
  },
  {
    name: 'Bruno Costa',
    cellPhone: '11987654322',
    email: 'bruno.costa@example.com'
  },
  {
    name: 'Carla Souza',
    cellPhone: '11987654323',
    email: 'carla.souza@example.com'
  },
  {
    name: 'Daniel Oliveira',
    cellPhone: '11987654324',
    email: 'daniel.oliveira@example.com'
  },
  {
    name: 'Bruno Costa',
    cellPhone: '11987654322',
    email: 'bruno.costa@example.com'
  },
  {
    name: 'Carla Souza',
    cellPhone: '11987654323',
    email: 'carla.souza@example.com'
  },
  {
    name: 'Alice Silva',
    cellPhone: '11987654321',
    email: 'alice.silva@example.com'
  },
  {
    name: 'Bruno Costa',
    cellPhone: '11987654322',
    email: 'bruno.costa@example.com'
  },
  {
    name: 'Carla Souza',
    cellPhone: '11987654323',
    email: 'carla.souza@example.com'
  },
  {
    name: 'Daniel Oliveira',
    cellPhone: '11987654324',
    email: 'daniel.oliveira@example.com'
  }
]

const ContactCard = () => {
  return (
    <>
      {contacts.map((contact) => {
        return (
          <S.Contact>
            <S.ContactImg src={iconContact} alt="Ícone de contato" />
            <div>
              <S.ContactName>{contact.name}</S.ContactName>
              <S.ContactText>{contact.cellPhone}</S.ContactText>
              <S.ContactText>{contact.email}</S.ContactText>
            </div>
          </S.Contact>
        )
      })}
    </>
  )
}

export default ContactCard
