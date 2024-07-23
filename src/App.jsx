import './App.css'
import HeaderComponent from './components/HeaderComponent'
import MovieList from './components/MovieList';

function App() {
  let title = "This is my React Project!";

  return (
    <>
      <HeaderComponent></HeaderComponent>

      <h2>{title}</h2>
      <MovieList></MovieList>
    </>
  )
}

export default App
