import styles from "./Note.module.css";

function Note(props) {
  return (
    <div className={styles.container}>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;
