import { createSlice } from '@reduxjs/toolkit'

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: [
      {
        id: 1,
        title: 'note1 lorem ipsum',
        color: '#4b0082',
        date: '14:32',
      },
      {
        id: 2,
        title: 'note2 dolor sir amet',
        color: '#0000ff',
        date: '14:33',
      },
    ],
    query: '',
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
    searchNotes: (state, action) => {
      state.query = action.payload
    },
  },
})

export const { addNote, removeNote, searchNotes } = notesSlice.actions
export default notesSlice.reducer
