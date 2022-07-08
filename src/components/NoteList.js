import React from 'react'
import { useSelector } from 'react-redux'
import Note from './Note'
import { Row } from 'react-bootstrap'

const NoteList = () => {
  const items = useSelector((state) => state.notes.notes)

  return (
    <Row>
      {items.map((item) => {
        return <Note key={item.id} {...item} />
      })}
    </Row>
  )
}

export default NoteList
