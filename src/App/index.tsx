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
import { formContext } from 'Contexts/formContext'

function App() {
    const [isLoading, setIsLoading] = React.useState(false)
    const [users, setUsers] = React.useState([])
    const [inputs, setInputs] = React.useState([])
    const [currentUser, setCurrentUser] = React.useState<UserType>()

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

    const sortByCity = () => {
        setUsers(prevState => {
            const nextState = [].concat(prevState).sort(sorting)

            return nextState
        })

        const sorting = (a: UserType, b: UserType) => {
            const cityA = a.address.city.toLowerCase()
            const cityB = b.address.city.toLowerCase()

            if (cityA > cityB) {
                return 1
            } else if (cityA < cityB) {
                return -1
            }
            return 0
        }
    }

    const sortByCompany = () => {
        setUsers(prevState => {
            const nextState = [].concat(prevState).sort(sorting)

            return nextState
        })

        const sorting = (a: UserType, b: UserType) => {
            const companyA = a.company.name.toLowerCase()
            const companyB = b.company.name.toLowerCase()

            if (companyA > companyB) {
                return 1
            } else if (companyA < companyB) {
                return -1
            }
            return 0
        }
    }

    const setUser = (user: UserType) => {
        setCurrentUser(user)
    }

    const setInputsFN = (arrayOfInputs: []) => {
        setInputs(arrayOfInputs)
    }

    const setInputValueFN = (value: string, title: string) => {
        setInputs(prevState => {
            return prevState.map(input => {
                if (input.title === title) {
                    input.value = value
                }
                return input
            })
        })
    }

    require('./index.scss')

    return (
        <Context.Provider
            value={{ sortByCity: sortByCity, sortByCompany: sortByCompany, setUserFN: setUser }}
        >
            <section className="users">
                <SortList />

                {isLoading ? (
                    <div className="loader-wrapper">
                        <Loader />
                    </div>
                ) : (
                    <Routes>
                        <Route path="/" element={<UsersList users={users} />} />
                        <Route
                            path="/profile"
                            element={
                                <formContext.Provider
                                    value={{
                                        inputs: inputs,
                                        setInputs: setInputsFN,
                                        setInputValue: setInputValueFN,
                                    }}
                                >
                                    <Profile user={currentUser} />
                                </formContext.Provider>
                            }
                        />
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
