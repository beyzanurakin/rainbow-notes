import AddNote from './components/AddNote'
import Header from './components/Header'
import NoteList from './components/NoteList'
import Search from './components/Search'

function App() {
  return (
    <div className='container'>
      <Header />
      <AddNote />
      <Search />
      <NoteList />
    </div>
  )
}

export default App
