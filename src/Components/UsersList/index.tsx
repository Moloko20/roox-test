import React from 'react'

import { UserItem, UserType } from 'Components/UserItem'

type UsersType = {
    users: UserType[]
}

export function UsersList({ users }: UsersType) {
    require('./index.scss')

    return (
        <>
            <div className="userslist">
                <h1>Список пользователей</h1>
                {users.map(user => {
                    if (users.length > 0) {
                        return <UserItem key={user.id} user={user} />
                    }

                    return <span>Пользователи не найдены</span>
                })}
                <span className="userslist__quantity">Найдено {users.length} пользователей</span>
            </div>
        </>
    )
}
