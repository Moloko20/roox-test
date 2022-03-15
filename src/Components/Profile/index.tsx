import React from 'react'

import { Button } from 'Components/UI/Button'
import { Input } from 'Components/UI/Input'
import { UserType } from 'Components/UserItem'

type ProfileProps = {
    user: UserType
}

export function Profile({ user }: ProfileProps) {
    const inputs = [
        {
            title: 'Name',
            type: 'text',
            value: user?.name,
        },
        {
            title: 'User name',
            type: 'text',
            value: user?.username,
        },
        {
            title: 'E-mail',
            type: 'text',
            value: user?.email,
        },
        {
            title: 'Street',
            type: 'text',
            value: user?.address.street,
        },
        {
            title: 'City',
            type: 'text',
            value: user?.address.city,
        },
        {
            title: 'Zip code',
            type: 'text',
            value: user?.address.zipcode,
        },
        {
            title: 'Phone',
            type: 'text',
            value: user?.phone,
        },
        {
            title: 'Website',
            type: 'text',
            value: user?.website,
        },
        {
            title: 'Comment',
            type: 'textarea',
            value: '',
        },
    ]

    const editHandler = () => {}

    const sendHandler = () => {}

    require('./index.scss')
    require('../UsersList/index.scss')

    return (
        <div className="userslist">
            <div className="profile">
                <div className="profile-header">
                    <h1>Профиль пользователя</h1>
                    <Button
                        title={'Редактировать'}
                        btnClick={editHandler}
                        btnClass={'button--edit'}
                    />
                </div>
                <div className="profile-body">
                    {inputs.map((input, index) => (
                        <Input
                            key={index}
                            inputTitle={input.title}
                            inputType={input.type}
                            inputValue={input.value}
                        />
                    ))}
                </div>
                <div className="profile-footer">
                    <Button title={'Отправить'} btnClick={sendHandler} btnClass={'button--send'} />
                </div>
            </div>
        </div>
    )
}
