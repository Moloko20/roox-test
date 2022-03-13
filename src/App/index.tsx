import React from 'react'
import ReactDOM from 'react-dom'

import { SortList } from 'Components/SortList'
import { UsersList } from 'Components/UserList'

function App() {
    require('./index.scss')

    return (
        <section className="users">
            <SortList />
            <UsersList />
        </section>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
)
