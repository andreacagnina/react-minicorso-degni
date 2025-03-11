import { useState } from "react";
import App2Counter from "./components/App2Counter.jsx";
function App() {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <h1>App2</h1>
            <div><App2Counter changeCounter={setCounter} /></div>
            <div>counter: {counter}</div>
        </>
    );
}

export default App;