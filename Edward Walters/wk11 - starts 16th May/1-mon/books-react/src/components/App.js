import BookSearch from "./BookSearch";
import BookIndex from "./BookIndex";
function App() {
  return (
    <div className="App">
      <h1>All Available Books</h1>
      <BookIndex />
      <BookSearch />
    </div>
  );
}

export default App;
