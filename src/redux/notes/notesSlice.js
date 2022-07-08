import { createSlice } from '@reduxjs/toolkit'

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: [
      {
        id: 1,
        title: 'note1',
        color: '#4b0082',
        date: 'Wed Jul 28 1993',
      },
      {
        id: 2,
        title: 'note2',
        color: '#0000ff',
        date: 'Wed Jul 28 1993',
      },
    ],
  },
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload)
    },
    removeNote: (state, action) => {
      const { id } = action.payload
      const filtered = state.notes.filter((note) => note.id !== id)
      state.notes = filtered
    },
  },
})

export const { addNote, removeNote } = notesSlice.actions
export default notesSlice.reducer
