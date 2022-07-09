import React from 'react'
import { useDispatch } from 'react-redux'
import { removeNote } from '../redux/notes/notesSlice'

function Note({ id, title, date, color }) {
  const dispatch = useDispatch()
  return (
    <div className='note' style={{ backgroundColor: `${color}` }}>
      <div>
        <div className='note-header'>
          <div className='title'>{title}</div>

          <a
            href='/#'
            className='delete-icon'
            onClick={() => dispatch(removeNote({ id }))}
          >
            <i className='material-symbols-outlined'>close</i>
          </a>
        </div>

        <p>{date}</p>
      </div>
    </div>
  )
}

export default Note
