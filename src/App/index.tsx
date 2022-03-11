import React from 'react'
import ReactDOM from 'react-dom'

import { SortList } from 'Components/SortList'
import { UserList } from 'Components/UserList'

// const DIFFICULTIES: Select = [
//     { value: "easy", title: "Easy" },
//     { value: "normal", title: "Normal" },
//     { value: "hard", title: "Hard" },
// ]

function App() {
    // const [diff, setDiff] = React.useState<string>('easy')
    // const [gameState, setGameState] = React.useState<FaceTypes>('start')
    // const gameResetFn = React.useRef<() => void>()

    // const changeDifficulty = React.useCallback((value: string) => {
    //     setDiff(value)
    // }, [])

    // const changeEmoji = React.useCallback((value: FaceTypes) => {
    //     setGameState(value)
    // }, [])

    // const gameResetter = React.useCallback(resetter => {
    //     gameResetFn.current = resetter
    // }, [])

    // const resetHandler = () => {
    //     gameResetFn.current()
    // }

    require('./index.scss')

    return (
        <section className="users">
            <SortList />
            <UserList />
            {/* <div className="menu">
                <Select options={DIFFICULTIES} value={diff} onChange={changeDifficulty} />
                <Face state={gameState} onResetGame={resetHandler} />
                <Timer state={gameState} />
            </div>
            <Board difficulty={diff} onGameState={changeEmoji} getReset={gameResetter} /> */}
        </section>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
)
