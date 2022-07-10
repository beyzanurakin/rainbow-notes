import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchNotes } from '../redux/notes/notesSlice'

function Search() {
  const dispatch = useDispatch()
  const query = useSelector((state) => state.notes.query)

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(searchNotes(e.target.value))
  }
  return (
    <div className='search'>
      <input
        value={query}
        type='text'
        placeholder='Search...'
        onChange={handleSearch}
      />
    </div>
  )
}

export default Search
