import { useDispatch } from 'react-redux'
import { FormEvent, useState } from 'react'

import ContactClass from '../../models/Contact'
import { editContact, removeContact } from '../../store/reducers/contacts'

import * as S from './styles'
import { Button, Inputs } from '../../styles'

type Props = ContactClass

const ContactCard = ({ id, name, phone, email }: Props) => {
  const dispatch = useDispatch()

  const [isEditing, setIsEditing] = useState(false)

  const [newName, setNewName] = useState(name)
  const [newPhone, setNewPhone] = useState(phone)
  const [newEmail, setNewEmail] = useState(email)

  function editingContactForm(event: FormEvent) {
    event.preventDefault()
    name = newName
    phone = newPhone
    email = newEmail
    dispatch(editContact({ id, name, phone, email }))
    setIsEditing(false)
  }

  return (
    <S.Contact>
      {isEditing ? (
        <form onSubmit={editingContactForm}>
          <Inputs
            type="text"
            placeholder="Nome"
            name="name"
            value={newName}
            onChange={({ target }) => setNewName(target.value)}
          />
          <Inputs
            type="tel"
            placeholder="Telefone"
            name="phone"
            value={newPhone}
            onChange={({ target }) => setNewPhone(target.value)}
          />
          <Inputs
            type="email"
            placeholder="Email"
            name="email"
            value={newEmail}
            onChange={({ target }) => setNewEmail(target.value)}
          />
          <S.DivButton>
            <S.CancelButton type="button" onClick={() => setIsEditing(false)}>
              Cancelar
            </S.CancelButton>
            <Button type="submit">Salvar</Button>
          </S.DivButton>
        </form>
      ) : (
        <>
          <S.ContactName>{name}</S.ContactName>
          <S.ContactText>{phone}</S.ContactText>
          <S.ContactText>{email}</S.ContactText>
          <S.CloseButton
            onClick={() => dispatch(removeContact(id))}
            type="button"
          >
            X
          </S.CloseButton>
          <S.DivButton>
            <S.EditButton onClick={() => setIsEditing(true)}>
              Editar
            </S.EditButton>
          </S.DivButton>
        </>
      )}
    </S.Contact>
  )
}

export default ContactCard
