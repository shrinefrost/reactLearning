import styles from "./Note.module.css";
function Note() {
  return (
    <div className={styles.container}>
      <h3>This is the note Title</h3>
      <p>This is the note content</p>
    </div>
  );
}

export default Note;
