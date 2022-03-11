import React from 'react'
import { Link } from 'Components/UX/Link'

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

const userTitles = {
    fullName: 'ФИО',
    city: 'Город',
    company: 'Компания',
}

export function UserItem() {
    require('./index.scss')

    return (
        <div className="useritem">
            <div className="useritem-row">
                <span className="useritem-row__title">{userTitles.fullName}:</span>
            </div>
            <div className="useritem-row">
                <span className="useritem-row__title">{userTitles.city}:</span>
            </div>
            <div className="useritem-row">
                <span className="useritem-row__title">{userTitles.company}:</span>
            </div>
            <Link />
        </div>
    )
}
