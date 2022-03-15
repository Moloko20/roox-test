import React from 'react'
import { Link } from 'react-router-dom'

import { Context } from 'Contexts/context'

export type UserType = {
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        city: string
        zipcode: string
    }
    phone: string
    website: string
    company: {
        name: string
    }
}

type UserTypeProp = {
    user: UserType
}

const userTitles = {
    fullName: 'ФИО',
    city: 'Город',
    company: 'Компания',
}

function UserItemComponent({ user }: UserTypeProp) {
    const context = React.useContext(Context)

    const linkHandler = (user: UserType) => {
        context.setUserFN(user)
    }

    require('./index.scss')

    return (
        <div className="useritem">
            <Link className="useritem__link" to="/profile" onClick={() => linkHandler(user)}>
                Подробнее
            </Link>
            <div className="useritem-row">
                <span className="useritem-row__title">{userTitles.fullName}: </span>
                {user.name}
            </div>
            <div className="useritem-row">
                <span className="useritem-row__title">{userTitles.city}: </span>
                {user.address.city}
            </div>
            <div className="useritem-row">
                <span className="useritem-row__title">{userTitles.company}: </span>
                {user.company.name}
            </div>
        </div>
    )
}

export const UserItem = React.memo(UserItemComponent)