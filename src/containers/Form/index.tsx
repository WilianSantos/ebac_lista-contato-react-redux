import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { addContact } from '../../store/reducers/contacts'
import { Inputs, Form as F, Button } from '../../styles'

const Form = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const dispatch = useDispatch()

  function addContactForm(event: FormEvent) {
    event.preventDefault()

    dispatch(addContact({ name, phone, email }))
    setName('')
    setPhone('')
    setEmail('')
  }

  return (
    <F onSubmit={addContactForm}>
      <Inputs
        type="text"
        placeholder="Nome"
        name="name"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <Inputs
        type="tel"
        placeholder="Telefone"
        name="phone"
        value={phone}
        onChange={({ target }) => setPhone(target.value)}
      />
      <Inputs
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <Button type="submit">Adicionar</Button>
    </F>
  )
}

export default Form
