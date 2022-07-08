import { nanoid } from '@reduxjs/toolkit'
import { Button, Form, ButtonGroup } from 'react-bootstrap'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from '../redux/notes/notesSlice'

const AddNote = () => {
  const [newNote, setNewNote] = useState('')
  const [color, setColor] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newNote === '') return
    if (color === '') return
    let date = new Date()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let time = `${hour}:${minutes}`
    dispatch(
      addNote({
        id: nanoid(),
        color,
        title: newNote,
        date: time,
      })
    )
    setNewNote('')
    setColor('')
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            style={{ backgroundColor: `${color}` }}
            className='note'
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          ></Form.Control>
          <ButtonGroup>
            <button
              type='button'
              className='violet'
              onClick={() => setColor('#9400d3')}
            >
              Violet
            </button>
            <button
              type='button'
              className='indigo'
              onClick={() => setColor('#4b0082')}
            >
              Indigo
            </button>
            <button
              type='button'
              className='blue'
              onClick={() => setColor('#0000ff')}
            >
              Blue
            </button>
            <button
              type='button'
              className='green'
              onClick={() => setColor('#00ff00')}
            >
              Green
            </button>
            <button
              type='button'
              className='yellow'
              onClick={() => setColor('#ffff00')}
            >
              Yellow
            </button>
            <button
              type='button'
              className='orange'
              onClick={() => setColor('#ff7f00')}
            >
              Orange
            </button>
            <button
              type='button'
              className='red'
              onClick={() => setColor('#ff0000')}
            >
              Red
            </button>
          </ButtonGroup>
          <Button type='submit'>ADD NOTE</Button>
        </Form.Group>
      </Form>
    </>
  )
}

export default AddNote
