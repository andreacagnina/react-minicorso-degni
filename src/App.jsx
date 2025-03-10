import { use, useState } from "react";
import Counter from "./components/Counter.jsx";
import './index.css'

function App() {
  const [appTitle, setAppTitle] = useState("Applicazione React | App.jsx");

  const color = 'blue';

  const [languages, setLanguages] = useState(['HTML', 'CSS', 'JS', 'PHP', 'Python']);

  function addLenguage() { setLanguages([...languages, 'Ruby']) }

  const [point, setPoint] = useState({ x: 10, y: 4 });

  function changePoint() {
    setPoint({ ...point, x: point.x + 1 });
  }

  return (
    <div>
      <h1>{appTitle}</h1>
      <div>
        <button
          onClick={() => {
            setAppTitle("Nuovo Titolo");
          }}
        >
          Cambia Titolo
        </button>
      </div>
      <Counter />
      {color === 'blue' && <p>Color is blue</p>}
      {color === 'green' ? <p>Color is green</p> : <p>Color is not green</p>}

      <div className="languages">
        {languages.map((language, index) => {
          return <p key={language + '_' + index}>{index + 1}: {language}</p>;
        })}
        <button onClick={addLenguage}>Add Language</button>
      </div>
      <div className="point">
        <p>Point:</p>
        <p>x: {point.x}</p>
        <p>y: {point.y}</p>
        <p>Area: {point.x * point.y}</p>

        <button onClick={changePoint}>Incrementa X</button>

      </div>
    </div>
  );
}

export default App;
