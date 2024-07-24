import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import MovieList from "./components/MovieList";

function App() {
  let title = "This is my React Project!!";

  return (
    <>
      <HeaderComponent></HeaderComponent>

      <main className="main">
        <h2>{title}</h2>
        <MovieList></MovieList>
      </main>
    </>
  );
}

export default App;
