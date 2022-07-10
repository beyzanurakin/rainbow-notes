import React from 'react'
import { useSelector } from 'react-redux'
import Note from './Note'

const NoteList = () => {
  const items = useSelector((state) => state.notes.notes)
  let filteredNotes = items
  const searchText = useSelector((state) => state.notes.query)

  if (searchText && searchText !== '') {
    filteredNotes = filteredNotes.filter((note) =>
      note.title.toLowerCase().includes(searchText.toLowerCase())
    )
  } else {
    filteredNotes = items
  }

  return (
    <div className='notes-list'>
      {filteredNotes.map((item) => {
        return <Note key={item.id} {...item} />
      })}
    </div>
  )
}

export default NoteList
