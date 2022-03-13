import React from 'react'
import { Link } from 'Components/UI/Link'

type UserType = {
    name: string
    city: string
    company: string
}

const userTitles = {
    fullName: 'ФИО',
    city: 'Город',
    company: 'Компания',
}

function UserItemComponent({ name, city, company }: UserType) {
    require('./index.scss')

    return (
        <div className="useritem">
            <Link />
            <div className="useritem-row">
                <span className="useritem-row__title">{userTitles.fullName}: </span>
                {name}
            </div>
            <div className="useritem-row">
                <span className="useritem-row__title">{userTitles.city}: </span>
                {city}
            </div>
            <div className="useritem-row">
                <span className="useritem-row__title">{userTitles.company}: </span>
                {company}
            </div>
        </div>
    )
}

export const UserItem = React.memo(UserItemComponent)