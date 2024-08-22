import { NoteAPI } from 'api/note-api'
import { NoteForm } from 'components/NoteForm/NoteForm'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addNote } from 'store/notes/notes-slice'

export function NoteCreate(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const submit = async (formValues) => {
    const createdNote = await NoteAPI.create({
      ...formValues,
      created_at: new Date().toLocaleDateString(),
    })
    dispatch(addNote(createdNote))
    alert("The note has been added to the list")
    navigate("/")
  }
  return (
    <>
      <NoteForm title="New note" onSubmit={submit} />
    </>
  )
}
