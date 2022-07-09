import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchNotes } from '../redux/notes/notesSlice'

function Search() {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()
  const handleSearch = (e) => {
    console.log(query)
    e.preventDefault()
    dispatch(searchNotes(query))
    setQuery('')
  }
  return (
    <div className='search'>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          placeholder='Search...'
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  )
}

export default Search
