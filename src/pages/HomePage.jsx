import { useState } from "react";
import HeaderComponent from "../components/HeaderComponent";

function HomePage() {
  let title = "This is my React Project!";

  const [counter, setCounter] = useState(0);

  const handleClick = (e) => {
    console.log(e);
    console.log("Title has been clicked");
  };

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const [condition, setCondition] = useState(true);

  return (
    <>
      <HeaderComponent></HeaderComponent>

      <main className="main">
        {condition && <h2>The condition is truthy</h2>}
        {!condition && <h2>The condition is falsy</h2>}

        {condition ? (
          <h2>The condition is truthy</h2>
        ) : (
          <h2>The condition is falsy</h2>
        )}
        <button onClick={() => setCondition(!condition)}>
          Toggle condition
        </button>

        <h2>Counter: {counter}</h2>
        <button onClick={increaseCounter}>Increase counter</button>

        <h2 onClick={handleClick}>{title}</h2>
      </main>
    </>
  );
}

export default HomePage;
