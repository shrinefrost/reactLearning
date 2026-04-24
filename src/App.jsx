import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Note from "./components/Note/Note";
import notes from "./notes-data";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <div className="notes-container">
        {notes.map((data) => {
          return <Note key={data.id} title={data.title} content={data.content} />;
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
