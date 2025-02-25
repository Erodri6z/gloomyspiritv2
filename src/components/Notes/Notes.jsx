const Notes = (props) => {
  let notes = props.notes
  
  return (
    <>
    <div className="sticky-note">
      <h4>Notes</h4>
      {notes.map((n) => 
      <li>{n}</li>
      )}
    </div>
    </>
  )
}

export default Notes