import Note from "../note";

function NoteList({ noteList }) {
  return (
    <>
      {noteList.map((note, idx) => {
        console.log(note);
        return <Note key={idx} note={note} />;
      })}
    </>
  );
}
export default NoteList;
