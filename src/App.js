import { Container, Row } from 'react-bootstrap'
import AddNote from './components/AddNote'
import NoteList from './components/NoteList'

function App() {
  return (
    <div className='App'>
      <Container>
        <Row>
          <AddNote />
        </Row>
        <Row>
          <NoteList />
        </Row>
      </Container>
    </div>
  )
}

export default App
