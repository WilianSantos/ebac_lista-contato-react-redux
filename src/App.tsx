import ContactList from './containers/ContactList'
import Sidebar from './containers/Sidebar'
import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <ContactList />
        <Sidebar />
      </Container>
    </>
  )
}

export default App
