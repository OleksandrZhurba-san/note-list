import { useState } from "react";
import styles from "./styles.module.css";
function Note({ note }) {
  const [noteState, setNoteState] = useState(false);
  const inline = {
    textDecoration: noteState ? "line-through" : "none",
    color: noteState ? "rgba(58, 89, 136, 0.3)" : "rgba(58, 89, 136, 1)",
  };
  //color: #3a5988;
  function handleChange(event) {
    setNoteState((prev) => !prev);
  }

  return (
    <div className={styles.note_wrapper}>
      <p style={inline} className={styles.note_text}>
        {note}
      </p>
      <input type="checkbox" onChange={handleChange}></input>
    </div>
  );
}
export default Note;
