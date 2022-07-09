import React from 'react'
import { useSelector } from 'react-redux'
import Note from './Note'
const NoteList = () => {
  const items = useSelector((state) => state.notes.notes)

  return (
    <div className='notes-list'>
      {items.map((item) => {
        return <Note key={item.id} {...item} />
      })}
    </div>
  )
}

export default NoteList
