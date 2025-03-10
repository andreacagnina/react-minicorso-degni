import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const changeCounter = {
        incrementCounter: () => {
            setCounter((c) => c + 1);
        },

        decrementCounter: () => {
            if (counter === 0) return;
            setCounter((c) => c - 1);
        },
    };
    return (
        <div>
            counter: {counter}
            <div>
                <button onClick={changeCounter.incrementCounter}>
                    Incrementa Counter
                </button>
                <button onClick={changeCounter.decrementCounter}>
                    Decrementa Counter
                </button>
            </div>
        </div>
    );
};

export default Counter;
