import React from 'react'

import { UserItem } from 'Components/UserItem'

export type UserType = {
    id: number
    name: string
    address: {
        city: string
    }
    company: {
        name: string
    }
}

type UsersType = {
    users: UserType[]
}

export function UsersList({ users }: UsersType) {
    require('./index.scss')

    return (
        <>
            <div className="userlist">
                <h1>Список пользователей</h1>
                {users.map(user => {
                    if (users.length > 0) {
                        return (
                            <UserItem
                                key={user.id}
                                name={user.name}
                                city={user.address.city}
                                company={user.company.name}
                            />
                        )
                    }

                    return <span>Пользователи не найдены</span>
                })}
                <span className="userlist__quantity">Найдено {users.length} пользователей</span>
            </div>
        </>
    )
}
