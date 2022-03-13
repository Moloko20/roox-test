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

type ButtonProps = {
    title: string
}

export function Button({ title }: ButtonProps) {
    const onClick = () => {
        console.log(title)
    }

    require('./index.scss')

    return (
        <button className="button" onClick={onClick}>
            {title}
        </button>
    )
}
