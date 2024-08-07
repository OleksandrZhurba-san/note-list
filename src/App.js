import "./App.css";
import { Note, NoteForm, NoteList } from "./components";

function App() {
  const styles = {
    background: "linear-gradient(to right, #A1D2E8, #F6C2CE)",
    width: "100vw",
    height: "100vh",
  };
  return (
    <div style={styles} className="App">
      <NoteForm />
    </div>
  );
}

export default App;
