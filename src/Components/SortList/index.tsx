import React from 'react'
import { Button } from '../UI/Button'

// export type FaceTypes = 'lose' | 'win' | 'game' | 'start'

// type stateList = {
//     [key in FaceTypes]: string
// }

// const STATE_LIST: stateList = {
//     lose: '💀',
//     win: '😎',
//     game: '🙂',
//     start: '🙂',
// }

// type faceProps = {
//     state: FaceTypes
//     onResetGame: () => void
// }

const buttonsTitles = ['по городу', 'по компании']

export function SortList() {
    require('./index.scss')

    return (
        <aside className="sortlist">
            <h2>Сортировка</h2>
            <Button title={buttonsTitles[0]} />
            <Button title={buttonsTitles[1]} />
        </aside>
    )
}
