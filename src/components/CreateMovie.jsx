import { useState } from "react";

function CreateMovie(props) {
  const { createMovie } = props;

  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [duration, setDuration] = useState(0);

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };

  const handleImgInput = (e) => {
    setImg(e.target.value);
  };

  const handleDurationInput = (e) => {
    setDuration(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const movie = {
      title: title,
      img: img,
      duration: duration
    }
    console.log(movie);

    if (!title) {
      console.log("Title shouldn't be empty");
      return;
    }
    createMovie(movie);

    setTitle("");
    setDuration(0);
    setImg("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="movie-title">Movie title: </label>
        <input
          type="text"
          id="movie-title"
          onChange={handleTitleInput}
          value={title}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="movie-img">Movie Img: </label>
        <input
          type="text"
          id="movie-img"
          onChange={handleImgInput}
          value={img}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="movie-duration">Movie Duration: </label>
        <input
          type="number"
          id="movie-duration"
          onChange={handleDurationInput}
          value={duration}
        />
      </fieldset>
      <button>Create Movie</button>
    </form>
  );
}

export default CreateMovie;
