import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import Blog from "./pages/Blog";
import PostDetails from "./pages/PostDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<PostDetails />} />
    </Routes>
  );
}

export default App;
