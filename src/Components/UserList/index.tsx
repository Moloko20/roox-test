import React from 'react'
import { UserItem } from '../UserItem'

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

export function UserList() {
    require('./index.scss')

    return (
        <div className="userlist">
            <h1>Список пользователей</h1>
            <UserItem />
        </div>
    )
}
