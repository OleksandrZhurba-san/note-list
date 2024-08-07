import { useState } from "react";
import styles from "./styles.module.css";
import NoteList from "../noteList";

function NoteForm() {
  const [noteText, setNoteText] = useState("");
  const [notes, setNotes] = useState([]);

  function handleChange(event) {
    setNoteText(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (noteText) {
      setNotes([...notes, noteText]);
    }
    setNoteText("");
  }
  return (
    <>
      <form className={styles.form_container} onSubmit={handleSubmit}>
        <input
          className={styles.form_textInput}
          type="text"
          value={noteText}
          placeholder="add your task"
          onChange={handleChange}
        ></input>
        <button className={styles.form_button} type="submit">
          Add
        </button>
        <NoteList noteList={notes} />
      </form>
    </>
  );
}

export default NoteForm;
