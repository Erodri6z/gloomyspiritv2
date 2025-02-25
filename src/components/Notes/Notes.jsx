import './Notes.css'

const Notes = (props) => {
  let notes = props.notes
  
  return (
    <>
    <div className="sticky-note">
      <h4 className='note-title'>Notes</h4>
      {notes.map((n) => 
      <li className='notes'>{n}</li>
      )}
    </div>
    </>
  )
}

export default Notes