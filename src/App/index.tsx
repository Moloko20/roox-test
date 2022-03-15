import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { SortList } from 'Components/SortList'
import { UsersList } from 'Components/UsersList'
import { UserType } from 'Components/UserItem'
import { Loader } from 'Components/UI/Loader'
import { Profile } from 'Components/Profile'

import { getUsers } from 'Services/getUsers'

import { Context } from 'Contexts/context'

const sortByCity = (a: UserType, b: UserType) => {
    const cityA = a.address.city.toLowerCase()
    const cityB = b.address.city.toLowerCase()

    if (cityA > cityB) {
        return 1
    } else if (cityA < cityB) {
        return -1
    }
    return 0
}

const sortByCompany = (a: UserType, b: UserType) => {
    const companyA = a.company.name.toLowerCase()
    const companyB = b.company.name.toLowerCase()

    if (companyA > companyB) {
        return 1
    } else if (companyA < companyB) {
        return -1
    }
    return 0
}

function App() {
    const [isLoading, setIsLoading] = React.useState(false)
    const [users, setUsers] = React.useState([])
    const [currentUser, setcurrentUser] = React.useState<UserType>()

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

    const sorting = (title: string) => {
        switch (title) {
            case 'по городу':
                setUsers(prevState => {
                    const nextState = [].concat(prevState).sort(sortByCity)

                    return nextState
                })
                break

            case 'по компании':
                setUsers(prevState => {
                    const nextState = [].concat(prevState).sort(sortByCompany)

                    return nextState
                })
                break
        }
    }

    const setUser = (user: UserType) => {
        setcurrentUser(user)
    }

    require('./index.scss')

    return (
        <Context.Provider value={{ sortingFN: sorting, setUserFN: setUser }}>
            <section className="users">
                <SortList />

                {isLoading ? (
                    <div className="loader-wrapper">
                        <Loader />
                    </div>
                ) : (
                    <Routes>
                        <Route path="/" element={<UsersList users={users} />} />
                        <Route path="/profile" element={<Profile user={currentUser} />} />
                    </Routes>
                )}
            </section>
        </Context.Provider>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
)
