import React from 'react'

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

export function Link() {
    return (
        <a className="useritem__link" href="#">
            Подробнее
        </a>
    )
}
