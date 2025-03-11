
// state lifting accedere e modificare lo stato di un componente padre da un figlio
export default function ({ changeCounter }) {
    return (
        <div>
            <div>
                <button onClick={() => { changeCounter(c => c + 1) }}>
                    +
                </button>
            </div>
            <div>
                <button onClick={() => { changeCounter(c => c - 1) }}>
                    -
                </button>
            </div>
        </div>
    )

}

