import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Contact from '../../models/Contact'

type ContactsState = {
  itens: Contact[]
}

const initialState: ContactsState = {
  itens: [
    {
      id: 1,
      name: 'Maria Clara',
      phone: '123456789',
      email: 'mariaclara@example.com'
    },
    {
      id: 2,
      name: 'João Pedro',
      phone: '987654321',
      email: 'joaopedro@example.com'
    },
    {
      id: 3,
      name: 'Ana Luiza',
      phone: '112233445',
      email: 'analuiza@example.com'
    },
    {
      id: 4,
      name: 'Lucas Gabriel',
      phone: '556677889',
      email: 'lucasgabriel@example.com'
    },
    {
      id: 5,
      name: 'Julia Beatriz',
      phone: '998877665',
      email: 'juliabeatriz@example.com'
    },
    {
      id: 6,
      name: 'Mateus Henrique',
      phone: '443322110',
      email: 'mateushenrique@example.com'
    },
    {
      id: 7,
      name: 'Laura Sofia',
      phone: '001122334',
      email: 'laurasofia@example.com'
    },
    {
      id: 8,
      name: 'Gustavo Felipe',
      phone: '334455667',
      email: 'gustavofelipe@example.com'
    },
    {
      id: 9,
      name: 'Isabela Rocha',
      phone: '776655443',
      email: 'isabelarocha@example.com'
    },
    {
      id: 10,
      name: 'Pedro Miguel',
      phone: '221100998',
      email: 'pedromiguel@example.com'
    },
    {
      id: 11,
      name: 'Amanda Silva',
      phone: '123456789',
      email: 'amanda.silva@example.com'
    },
    {
      id: 12,
      name: 'Rafael Souza',
      phone: '987654321',
      email: 'rafael.souza@example.com'
    },
    {
      id: 13,
      name: 'Camila Oliveira',
      phone: '112233445',
      email: 'camila.oliveira@example.com'
    },
    {
      id: 14,
      name: 'Bruno Santos',
      phone: '556677889',
      email: 'bruno.santos@example.com'
    },
    {
      id: 15,
      name: 'Juliana Pereira',
      phone: '998877665',
      email: 'juliana.pereira@example.com'
    },
    {
      id: 16,
      name: 'Thiago Rodrigues',
      phone: '443322110',
      email: 'thiago.rodrigues@example.com'
    },
    {
      id: 17,
      name: 'Fernanda Almeida',
      phone: '001122334',
      email: 'fernanda.almeida@example.com'
    },
    {
      id: 18,
      name: 'Leonardo Costa',
      phone: '334455667',
      email: 'leonardo.costa@example.com'
    },
    {
      id: 19,
      name: 'Patrícia Ribeiro',
      phone: '776655443',
      email: 'patricia.ribeiro@example.com'
    },
    {
      id: 20,
      name: 'Ricardo Barbosa',
      phone: '221100998',
      email: 'ricardo.barbosa@example.com'
    }
  ]
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action: PayloadAction<Omit<Contact, 'id'>>) {
      const lastContact = state.itens[state.itens.length - 1]
      const newContact = {
        ...action.payload,
        id: lastContact ? lastContact.id + 1 : 1
      }
      state.itens.push(newContact)
    },
    removeContact(state, action: PayloadAction<number>) {
      state.itens = state.itens.filter(
        (contact) => contact.id !== action.payload
      )
    },
    editContact(state, action: PayloadAction<Contact>) {
      const index = state.itens.findIndex(
        (contact) => contact.id === action.payload.id
      )
      state.itens[index] = action.payload
    }
  }
})

export default contactSlice.reducer
export const { addContact, removeContact, editContact } = contactSlice.actions
