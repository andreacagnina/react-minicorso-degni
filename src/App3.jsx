import { useEffect, useState } from "react";
function App() {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [users, setUsers] = useState([]);
    // hook onload ES. QUANDO FACCIAMO 1 CHIAMATA FETCH, LA FACCIAMO SOLO 1 VOLTA PER OTTENERE I DATI E NON AD OGNI UPDATE
    useEffect(() => {
        console.log("App3 onLoad"); fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(json => setUsers(json));
    }, []);

    // hook onLoad && onUpdate(counter2)
    useEffect(() => { console.log("App3 onLoad al click di counter2") }, [counter2
    ]);
    // hook onLoad && onUpdate
    useEffect(() => { console.log("App3 onLoad") }, [
    ]);

    return (
        <>
            <h1>App3</h1>
            <div>
                {counter}
            </div>
            <div>
                <button onClick={() => setCounter(c => c + 10)}>+</button>
            </div>
            <div>
                {counter2}
            </div>
            <div>
                <button onClick={() => setCounter2(c => c + 10)}>+</button>
            </div>
            <div>
                <h2>Users</h2>
                {users.length > 0 ? (

                    <div className="users">
                        {users.map((user) => (<div key={user.id}>{user.name} ({user.email}
                            )
                        </div>))}
                    </div>
                ) : (<div>Nessun Utente</div>)}
            </div>
        </>
    );
}

export default App;