import React from 'react'

import { UserItem } from 'Components/UserItem'
import { Loader } from 'Components/UI/Loader'

import { getUsers } from 'Services/getUsers'

export function UsersList() {
    const [users, setUsers] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)

    React.useEffect(() => {
        const loadData = async () => {
            setIsLoading(true)

            await getUsers()
                .then(data => setUsers(data))
                .catch(error => console.error(error))

            setIsLoading(false)
        }

        loadData()
    }, [])

    require('./index.scss')

    return (
        <div className="userlist">
            <h1>Список пользователей</h1>
            {isLoading ? (
                <div className="loader-wrapper">
                    <Loader />
                </div>
            ) : (
                users.map(user => {
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
                })
            )}
            <span className="userlist__quantity">Найдено {users.length} пользователей</span>
        </div>
    )
}
