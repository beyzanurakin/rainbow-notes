import React from 'react'
import { Card, Col, Row, CloseButton, Stack } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { removeNote } from '../redux/notes/notesSlice'

function Note({ id, title, date, color }) {
  const dispatch = useDispatch()
  return (
    <Col lg={4}>
      <div style={{ backgroundColor: 'blue' }}></div>
      <Card style={{ backgroundColor: `${color}` }}>
        <Card.Body>
          <Stack direction='horizontal' gap={3}>
            <div className='title'>{title}</div>
            <CloseButton
              className='ms-auto'
              onClick={() => dispatch(removeNote({ id }))}
            />
          </Stack>
          <div className='info'>
            <p>{date}</p>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Note
